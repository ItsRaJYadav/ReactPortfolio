'use client'
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppChatButton: React.FC<{ phoneNumber: string }> = () => {
    const phoneNumber = '+919472040607';
    const handleChat = () => {
        const message = encodeURIComponent("I'm interested in your Tech services. Can you provide more information?");
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappLink, '_blank');
    };



    return (
        <div className={`fixed bottom-2 right-0 z-40 `}>
            <button
                onClick={handleChat}
                className="bg-green-500 text-white py-4 px-4 rounded-full flex items-center hover:bg-gray-100 hover:text-green-500 transition duration-300 ease-in-out hover:shadow-lg"
            >
                <span className="">
                    <FaWhatsapp className="transition duration-300 ease-in-out transform hover:scale-110 h-5 w-5" />
                </span>
            </button>
        </div>
    );
};

export default WhatsAppChatButton;