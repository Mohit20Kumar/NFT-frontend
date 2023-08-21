import NFTCard from "@/components/NFTCard";
import useNFTMarket from "../../state/nft-market";
// import { NFT } from "@/state/nft-market/interfaces";

const OwnedPage = () => {
  const { ownedNFTs, ownedListedNFTs } = useNFTMarket();
  // console.log(ownedNFTs);

  if (ownedNFTs?.length == 0 && ownedListedNFTs?.length == 0) {
    return (
      <div className='flex w-full h-full justify-center font-bold m-auto text-center items-center'>
        You Currently dont own any NFTs!
      </div>
    );
  }

  return (
    <div className='flex  w-full flex-col items-center'>
      {ownedNFTs && ownedNFTs.length > 0 && (
        <>
          <div
            style={{
              width: "25%",
              margin: "20px auto",
              borderRadius: "10px",
              fontSize: "2rem",
              textAlign: "center",
              // padding: "10px auto",
              background: "red",
              fontWeight: "bold",
            }}
            className='flex justify-center items-centertext-2xl rounded-sm text-white bg-black'>
            NFTs Owned
          </div>
          <div
            style={{ marginBottom: "10px", marginTop: "10px" }}
            className='flex m-5 flex-wrap'>
            {ownedNFTs?.map((nft) => (
              <NFTCard nft={nft} key={nft.id} />
            ))}
          </div>
        </>
      )}

      {ownedListedNFTs && ownedListedNFTs.length > 0 && (
        <>
          <div
            style={{
              width: "25%",
              margin: "20px auto",
              borderRadius: "10px",
              fontSize: "2rem",
              textAlign: "center",
              // padding: "10px auto",
              background: "red",
              fontWeight: "bold",
            }}
            className='flex justify-center items-centertext-2xl rounded-sm text-white bg-black'>
            NFTs Listed for Sale
          </div>

          <div style={{ marginTop: "20px" }} className='flex flex-wrap '>
            {ownedListedNFTs?.map((nft) => (
              <NFTCard nft={nft} key={nft.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default OwnedPage;
