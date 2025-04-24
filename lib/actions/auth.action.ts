'use server';

import { db } from "@/firebase/admin";

export async function signUp(params: SignUpParams) {
    const { uid, name, email } = params;

    try {
        const userRecord = await db.collection('users').doc(uid).get();

        if (userRecord.exists) {
            return {
                success: false,
                message: 'User already exists. Please sing in instead.'
            }
        }

        await db.collection('users').doc(uid).set({
            name, email
        })
    } catch (error: any) {
        console.error("Error creating a user", error);
        if (error.code === 'auth/email-already-exists') {
            return {
                success: false,
                message: "This email is already used."
            }
        }

        return {
            success: false,
            message: "Failed to create an account."
        }
    }
}

// export async function setSessionCookie(idToken:string) {
//     const cookieStore = await
// }