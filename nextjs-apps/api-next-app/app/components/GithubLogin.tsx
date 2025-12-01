"use client"

import { signIn } from 'next-auth/react'
export default function GithubLogin() {
  return (
    <div>
        <button type='button' onClick={() => signIn('github')}>Login with Github</button>
    </div>
  )
}
