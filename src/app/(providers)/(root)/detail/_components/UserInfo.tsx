// TODO: user정보 받아와서 로직 짜기
const UserInfo = () => {
  return (
    <div className="flex flex-col gap-[50px] justify-center items-center">
      {/*TODO: next image로 변경필요!!!*/}
      <img
        className="w-[50px] h-[50px] rounded-full overflow-hidden object-cover"
        src="https://scontent-nrt1-2.xx.fbcdn.net/v/t1.6435-9/66059442_2275758249307701_5758914269005479936_n.png?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=8dsZHav4tcgQ7kNvgEUja4v&_nc_ht=scontent-nrt1-2.xx&oh=00_AYCsT_OzCYO6ORnFoxxnBin-78EpvKcNJZoR7OivDeVBzw&oe=66B59DE5"
        alt="프로필"
      />
      <div className="flex flex-col gap-2 text-center">
        <div className="font-bold text-[#222222] text-lg">김소라</div>
        <div className="text-base text-[#222222]">소라의 키친</div>
      </div>
    </div>
  )
}
export default UserInfo;