'use client'
import { useAuth } from '@clerk/nextjs'

export default function home() {
  const { isLoaded, userId, sessionId, getToken } = useAuth()

  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return null
  }

  return (
    <div className='text-black'>
      Hello, {userId} your current active session is {sessionId} 
    </div>
  )
}