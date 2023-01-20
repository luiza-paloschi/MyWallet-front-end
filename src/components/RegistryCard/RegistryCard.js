import { DivBalance, DivCard, SpanDate, SpanDescription, SpanValue } from "./styled";



export default function RegistryCard({r}){
    return(
        <DivCard>
            <SpanDate>{r.date}</SpanDate>
            <SpanDescription>{r.description}</SpanDescription>
            <SpanValue type ={r.type}>{r.value.toFixed(2).toString().replace(".", ",")}</SpanValue>
        </DivCard>
    );
}