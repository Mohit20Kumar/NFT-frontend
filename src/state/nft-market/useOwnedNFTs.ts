
import {gql,useQuery} from "@apollo/client"
import useSigner from "../signer";
import { GET_OWNED_NFTs, GET_OWNED_NFTsVariables, GET_OWNED_NFTs_nfts } from "./__generated__/GET_OWNED_NFTs";
import { NFT } from "./interfaces";
import { ethers } from "ethers";
import { parseRawNFT } from "./helpers";


const useOwnedNFTs = () =>{
    const {address} = useSigner();

    const {data} = useQuery<GET_OWNED_NFTs,GET_OWNED_NFTsVariables>(
        GET_OWNED_NFTS,
        {variables:{owner:address ?? ""},skip : !address}
    );

    // console.log(data); 

    const ownedNFTs = data?.nfts.map(parseRawNFT) ;
    
    // console.log(ownedNFTs);
    
    return {ownedNFTs};
}



const GET_OWNED_NFTS = gql`
    query GetOwnedNFTs($owner:String!){
        nfts(where:{to:$owner}){
            id
            from
            to
            tokenURI
            price
        }
    }
`;

export default useOwnedNFTs