import { createSlice } from "@reduxjs/toolkit"

const initialState =[];

  const carrinhoSlice = createSlice({
    name:"carrinho",
    initialState,
    reducers:{
        mudarCarrinho: (state,{payload})=>{
            const itemItem = state.some(item=>item.id === payload);
            if(!itemItem) return [
                ...state,
                {
                    id:payload,
                    quantidade:1
                }
            ]
            return	state.filter(item=>item.id !==payload)
        },
        mudarQuantidade: (state,{payload})=>{
            state.map(itemNoCarrinho =>{
                if(itemNoCarrinho.id === payload.id){
                    itemNoCarrinho.quantidade += payload.quantidade    
                }
                return itemNoCarrinho
            })
        },
        resetatCarrinho: ()=> initialState
    }
  })

  export const {mudarCarrinho,mudarQuantidade,resetatCarrinho} = carrinhoSlice.actions
  export default carrinhoSlice.reducer;