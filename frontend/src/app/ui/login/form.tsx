'use client'

import Button from '@/app/ui/button'

export default function FormLogin() {
  return (
    <form className="flex flex-col gap-5 pt-10 text-base">
      <div>
        <label
          htmlFor="email"
          className="pb-2 text-sm font-normal text-zinc-500"
        >
          E-mail
        </label>
        <div className="flex h-10 w-80 bg-slate-100 focus-within:outline focus-within:outline-1 focus-within:outline-indigo-400">
          <div className="w-1 bg-blue-500" />
          <input
            type="text"
            id="email"
            placeholder="E-mail"
            className="w-full bg-transparent pl-3 text-slate-600 outline-none placeholder:font-medium"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="pb-2 text-sm font-normal text-zinc-500"
        >
          Password
        </label>
        <div className="flex h-10 w-80 bg-slate-100 focus-within:outline focus-within:outline-1 focus-within:outline-indigo-400">
          <div className="w-1 bg-blue-500" />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full bg-transparent pl-3 text-slate-600 outline-none placeholder:font-medium"
          />
        </div>
      </div>
      <Button.Root className="border-blue-theme bg-blue-700 text-blue-500 hover:bg-blue-500 hover:text-white">
        <Button.Label label="Login" />
      </Button.Root>
    </form>
  )
}
