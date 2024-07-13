import '@/styles/loader.css';
const Loader = () => {
  return (
    <div className="lds-ellipsis flex items-center justify-center h-screen">
      <div className="w-4 h-4 bg-current rounded-full m-1 animate-lds-ellipsis1"></div>
      <div className="w-4 h-4 bg-current rounded-full m-1 animate-lds-ellipsis2"></div>
      <div className="w-4 h-4 bg-current rounded-full m-1 animate-lds-ellipsis2"></div>
      <div className="w-4 h-4 bg-current rounded-full m-1 animate-lds-ellipsis3"></div>
    </div>
  );
};
export default Loader;
