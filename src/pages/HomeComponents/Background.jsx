import backgroundImg from '../../assets/bg.png';

const Background = () => {
    return (
        <div
            className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat h-screen w-screen"
            style={{ backgroundImage: `url(${backgroundImg})` }}
        />
    );
};
export default Background;

