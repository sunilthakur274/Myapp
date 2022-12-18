import react,{  useState , useMemo} from "react"

export default function Memo()
{
    const[adddata,setAddData] = useState(0);
    const[state,setState] = useState(0);

    const count = () =>
    {

        setAddData(adddata+1)
       
    } 

    const add = () =>
    {
        setState(state+1);
    }
    
    const even = useMemo(()=>
    {
        let i = 0;
        while(i<2000000) i++
         return adddata % 2 === 0 ;
    },[adddata])
    
    return(<>
                {adddata}
                {even()?'even':'odd'}
                <button onClick={count}>COunt1</button>
                
                {state}
                <button onClick={add}>COunt2</button>
    
    </>)
}