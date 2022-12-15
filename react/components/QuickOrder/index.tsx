import React, { useEffect, useState } from "react";
import { useLazyQuery,useMutation } from "react-apollo";
import UPDATE_CART from '../../graphql/updateCart.graphql'
import GET_PRODUCT from '../../graphql/getProductBySku.graphql'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

type Props = {
    quickOrderTitle: string
}

const QuickOrder = ({quickOrderTitle = "Quick Order"}:Props) => {
    //States
    const [inputText, setInputText] = useState<string>("");
    const [search, setSearch] = useState<string>("");

    //Graphql methods
    const [getProductData, { data: product }] = useLazyQuery(GET_PRODUCT);
    const [addToCart] = useMutation(UPDATE_CART);

    //Functions
    const handleChange = (event:any) => {
        setInputText(event.target.value);
    };
    const addProductToCart = () => {
        getProductData({
            variables: {
                sku: inputText
            }
        })
    }
    const searchProduct = (event:any) =>{
        event.preventDefault();
        if (!inputText) {
            alert("Ingresa el ID del Sku")
        } else {
            setSearch(inputText);
            addProductToCart()
        }
    }
    
    //Effects
    useEffect(() => {
        if(product) {
            let skuId = parseInt(inputText);
            console.log(skuId);
            addToCart({
                variables: {
                    salesChannel: "1",
                    items: [
                        {
                            id: skuId,
                            quantity: 1,
                            seller: "1"
                        }
                    ]
                }
            }).then(() => {
                window.location.href = "/checkout"
            })
        }
    },[product,search])

    //CSS handles
    const CSS_HANDLES = [
        "quick__order--container",
        "quick__order--title",
        "quick__order--form-container",
        "quick__order--input-container",
        "quick__order--form-label",
        "quick__order--form-input",
        "quick__order--form-submit",
    ];
    const handles = useCssHandles(CSS_HANDLES);
    

    return(
        <div className={handles['quick__order--container']}>
            <h2 className={handles['quick__order--title']}>{quickOrderTitle}</h2>
            <form 
                className={handles['quick__order--form-container']}
                autoComplete="off" 
                onSubmit={searchProduct}>
                <input 
                    className={handles['quick__order--form-input']} 
                    id="sku" 
                    type="text"
                    placeholder="SkuId" 
                    onChange={handleChange}
                />
                <input 
                    className={handles['quick__order--form-submit']} 
                    type="submit" 
                    value="AÑADIR E IR A CHECKOUT"
                />
            </form>
        </div>
    )
}

export default QuickOrder