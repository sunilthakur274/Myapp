import Subchild1 from "./subChild1"
export default function Parent()
{
    const parent = () => {
        console.log("data transfer from child to parent")
    }

    
    const text = 'Iam a child component'

    return (<> 
                
                <div>sdnsd</div>

                
                <Subchild1 Parent={parent} child={text}/>
    </>)
}