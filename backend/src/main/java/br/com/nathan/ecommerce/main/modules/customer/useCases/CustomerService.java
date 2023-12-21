package br.com.nathan.ecommerce.main.modules.customer.useCases;

import br.com.nathan.ecommerce.main.core.domain.AbstractService;
import br.com.nathan.ecommerce.main.core.exceptions.ValidationException;
import br.com.nathan.ecommerce.main.core.interfaces.IDAO;
import br.com.nathan.ecommerce.main.core.interfaces.Mapper;
import br.com.nathan.ecommerce.main.core.interfaces.Strategy;
import br.com.nathan.ecommerce.main.core.interfaces.Validator;
import br.com.nathan.ecommerce.main.modules.customer.domain.Customer;
import br.com.nathan.ecommerce.main.modules.customer.domain.Password;
import br.com.nathan.ecommerce.main.modules.customer.repository.entity.CustomerEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static br.com.nathan.ecommerce.main.core.utils.Utils.Hash256;

@Service
public class CustomerService extends AbstractService<Customer, CustomerEntity> {

    private final Strategy<Customer> businessRules;

    @Autowired
    public CustomerService(
        IDAO<CustomerEntity> dao,
        Mapper<Customer, CustomerEntity> mapperToEntity,
        Mapper<CustomerEntity, Customer> mapperToDomain,
        Strategy<Customer> businessRules,
        Validator<Customer> validator
    ) {
        super(dao, mapperToEntity, mapperToDomain, validator);
        this.businessRules = businessRules;
    }

    @Override
    public Customer create(Customer customer) {
        businessRules.process(customer);
        customer.setPassword(Password.Create(Hash256(customer.getPassword().getValue())));
        return super.create(customer);
    }

    @Override
    public Customer update(Customer customer, Long id) {
        businessRules.process(customer);
        validator.validate(customer);
        var dbCustomer = findById(id);
        customer.setPassword(dbCustomer.getPassword());
        return super.update(customer, id);
    }

    public void updatePassword(Long id, String password) {
        final var customer = findById(id);
        customer.setPassword(Password.Create(Hash256(password)));
        this.update(customer, id);
    }
}
