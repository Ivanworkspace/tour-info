import React, { useRef, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

const QRSection: React.FC = () => {
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Import QRCode dynamically to avoid server-side rendering issues
    const loadQRCode = async () => {
      try {
        const QRCodeStyling = (await import('qr-code-styling')).default;
        
        if (qrRef.current) {
          const whatsappUrl = 'https://wa.me/+393XXXXXXXXX';
          
          const qrCode = new QRCodeStyling({
            width: 240,
            height: 240,
            type: 'svg',
            data: whatsappUrl,
            dotsOptions: {
              color: '#38bdf8',
              type: 'rounded'
            },
            cornersSquareOptions: {
              color: '#0284c7',
              type: 'extra-rounded'
            },
            cornersDotOptions: {
              color: '#0284c7',
            },
            backgroundOptions: {
              color: '#ffffff',
            },
            imageOptions: {
              crossOrigin: 'anonymous',
              margin: 5
            }
          });
          
          qrRef.current.innerHTML = '';
          qrCode.append(qrRef.current);
        }
      } catch (error) {
        console.error('Error loading QR code:', error);
        
        // Fallback if the QR code library fails to load
        if (qrRef.current) {
          qrRef.current.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full">
              <MessageSquare size={64} class="text-primary-600 mb-4" />
              <p class="text-gray-700 text-center">Scansiona il codice QR per chattare su WhatsApp</p>
            </div>
          `;
        }
      }
    };
    
    loadQRCode();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Parliamo su WhatsApp</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
              Scansiona il codice QR con il tuo smartphone per iniziare subito una conversazione con noi su WhatsApp.
            </p>
            <a 
              href="https://wa.me/+393XXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
            >
              <MessageSquare size={20} className="mr-2" />
              Chatta Ora
            </a>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
              <div className="flex justify-center">
                <div ref={qrRef} className="w-60 h-60 flex items-center justify-center bg-gray-100 rounded">
                  {/* QR Code will be rendered here */}
                  <div className="text-gray-500 text-center">
                    <MessageSquare size={48} className="mx-auto mb-2 text-primary-600" />
                    <p>Caricamento QR Code...</p>
                  </div>
                </div>
              </div>
              <p className="text-center mt-6 text-gray-700">
                Scansiona per connetterti direttamente con noi su WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRSection;