import { useEffect, useState } from "react"
import axios from 'axios';
import Header from "../header/Header";
import Item from "../item/Item";
function Main(){
    const [bestSeller,setBestSeller] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:1337/api/best-sellers").then((bestSeller)=>{
            setBestSeller(bestSeller.data.data)


        }).catch(()=>{

        }).finally(()=>{

        });
    },[])
    return<>
    <Header />
    <section>
        <article>Best Seller</article>
        {bestSeller.map((item,key)=>{
            return <Item item={item.attributes} key={key}/>
        })}
    </section>
    </>
}
export default Main