import {getProviders, signIn as signIntoProvider} from "next-auth/react"
import Header from "../../components/Header";

function signIn({providers}) {
  return (
    <>
        <Header/>
        <div className="flex flex-col items-center justify-center py-2 text-center bg-white rounded-lg my-2 mx-4 shadow-md">
            <img className="w-40 my-4" src="https://drive.google.com/uc?export=view&id=1aE1Z5THD1GCgaNO5CHS2Uu05l0L6DESR" alt=""/>
            <p className="font-xs italic my-2">
                Inicia sesión para publicar en la aplicación 
            </p>
            <div className="my-4">
                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button className="p-3 bg-lime-400 rounded-lg text-white" onClick={() => signIntoProvider(provider.id, {callbackUrl: "/"})}>
                            Entrar con {provider.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
        
      
    </>
  )
}


export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signIn
