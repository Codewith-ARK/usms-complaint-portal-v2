'use client'
import React, { useContext, useEffect } from 'react';
import SectionHeading from './Components/ui/SectionHeading';
import { useRouter } from 'next/navigation';
import UserContext from './Context/userContext';

export default function Page() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/Login');
    }
  }, [isLoggedIn, router]);

  return (
    <section className="py-16 px-6 flex-grow">
      <SectionHeading title={"Welcome User!"} />
      {/* Your page content */}
    </section>
  );
}
