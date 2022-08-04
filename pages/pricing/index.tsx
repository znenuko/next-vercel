import Link from "next/link";

import {MainLayout} from "../../components/layouts/MainLayout";


export default function ContactPage() {
  return (
    
      <MainLayout>
         
            <h1>Contact Page</h1>
            <h1 className={'title'}>
            
              Ir a <Link href="/Home">  
              <a>Contact!</a>
              </Link>
          
            </h1>
    
            <p className={'description'}>
              Get started by editing{" "}
              <code className={'code'}>pages/pricing.js</code>
            </p>
          
      </MainLayout>
      )
}
