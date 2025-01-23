'use server'
import { revalidatePath } from 'next/cache'


import User from '@/lib/database/models/user.model'


import { handleError } from '../utils'
import { connectToDatabase } from '../database'

export type CreateUserParams = {
    clerkId: string
    firstName: string
    lastName: string
    username: string
    email: string
    photo: string
  }

export async function createUser(user: CreateUserParams) {
    try {
      await connectToDatabase()
  
      const newUser = await User.create(user)
      return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
      handleError(error)
    }
  }
  export async function getUserById(userId: string) {
    try {
      await connectToDatabase()
  
      const user = await User.findById(userId)
  
      if (!user) throw new Error('User not found')
      return JSON.parse(JSON.stringify(user))
    } catch (error) {
      handleError(error)
    }
  }