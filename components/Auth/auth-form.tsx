import { useState, useRef } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import classes from './auth-form.module.css';

async function createUser(email: string) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

const AuthForm = () => {
  const [email, setEmail] = useState('');

  async function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    signIn('email', { callbackUrl: '/', email})
  }

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
          <div className={classes.bottomText}>We will send you magic link </div>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;