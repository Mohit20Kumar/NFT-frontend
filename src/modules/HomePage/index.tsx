import NFTCard from "@/components/NFTCard";
import useNFTMarket from "@/state/nft-market";

const HomePage = () => {
  const { ListedNFTs } = useNFTMarket();
  if (ListedNFTs?.length == 0) {
    return (
      <div className='flex w-full h-full justify-center font-bold m-auto text-center items-center'>
        No NFTs are for sale!
      </div>
    );
  }
  return (
    <div className='flex w-full flex-col'>
      <div
        style={{ marginBottom: "10px", marginTop: "10px" }}
        className='flex m-5 flex-wrap'>
        {ListedNFTs?.map((nft) => (
          <NFTCard nft={nft} key={nft.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
