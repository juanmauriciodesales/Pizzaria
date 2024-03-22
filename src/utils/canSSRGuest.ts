import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

//funcaoo para paginas que só podem ser acessadas por visitantes
export function canSSRGuest<P>(fn: GetServerSideProps<P>){
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        
        const cookies = parseCookies(ctx);
        
        //se o usuário tentar acessar a página com um login salvo nos redirecionamos
        if(cookies["@nextAuth.token"]){
            return{
                redirect:{
                    destination:"/dashboard",
                    permanent: false
                }
            }
        }
        return await fn(ctx);
    }
}