import React, { useEffect } from 'react';

declare global {
  interface Window {
    CookieConsent: any; 
  }
}

const CookieConsentBanner: React.FC = () => {
  useEffect(() => {
    if (window.CookieConsent) {
      window.CookieConsent.run({
        guiOptions: {
          consentModal: {
            layout: 'box',
            position: 'bottom right',
            equalWeightButtons: true,
            flipButtons: false
          },
          preferencesModal: {
            layout: 'box',
            position: 'right',
            equalWeightButtons: true,
            flipButtons: false
          }
        },
        categories: {
          necessary: {
            readOnly: true,
            enabled: true
          },
          analytics: {},
          marketing: {}
        },
        language: {
          default: 'it',
          translations: {
            it: {
              consentModal: {
                title: 'Questo sito utilizza i cookie',
                description: 'Utilizziamo i cookie per migliorare la tua esperienza di navigazione, personalizzare i contenuti e analizzare il nostro traffico. Cliccando \"Accetta tutti\", acconsenti al nostro utilizzo dei cookie.',
                acceptAllBtn: 'Accetta tutti',
                acceptNecessaryBtn: 'Rifiuta tutti',
                showPreferencesBtn: 'Preferenze',
                footer: '<a href="/privacy">Privacy Policy</a><a href="/termini">Termini</a>'
              },
              preferencesModal: {
                title: 'Preferenze Consenso Cookie',
                acceptAllBtn: 'Accetta tutti',
                acceptNecessaryBtn: 'Rifiuta tutti',
                savePreferencesBtn: 'Salva preferenze',
                closeIconLabel: 'Chiudi',
                serviceCounterLabel: 'Servizio|Servizi',
                sections: [
                  {
                    title: 'Utilizzo dei Cookie',
                    description: 'I cookie sono piccoli file di testo che possono essere utilizzati dai siti web per rendere più efficiente l\'esperienza per l\'utente. La legge afferma che possiamo memorizzare i cookie sul tuo dispositivo se sono strettamente necessari per il funzionamento di questo sito. Per tutti gli altri tipi di cookie abbiamo bisogno del tuo consenso.'
                  },
                  {
                    title: 'Cookie Necessari',
                    description: 'Questi cookie sono essenziali per il funzionamento del sito e non possono essere disabilitati nei nostri sistemi. Di solito vengono impostati solo in risposta ad azioni da te effettuate che costituiscono una richiesta di servizi, come l\'impostazione delle preferenze di privacy, l\'accesso o la compilazione di moduli.',
                    linkedCategory: 'necessary'
                  },
                  {
                    title: 'Cookie Analitici',
                    description: 'Questi cookie ci permettono di contare le visite e le sorgenti di traffico, per misurare e migliorare le prestazioni del nostro sito. Ci aiutano a sapere quali sono le pagine più e meno popolari e vedere come i visitatori si muovono intorno al sito.',
                    linkedCategory: 'analytics',
                    // cookieTable: {
                    //   caption: 'Cookie table',
                    //   headers: {
                    //     name: 'Cookie',
                    //     domain: 'Domain',
                    //     description: 'Description',
                    //     expires: 'Expires'
                    //   },
                    //   body: [
                    //     {
                    //       name: '_ga',
                    //       domain: 'yourwebsite.com',
                    //       description: 'Google Analytics cookie to distinguish users.',
                    //       expires: '2 years'
                    //     }
                    //   ]
                    // }
                  },
                  {
                    title: 'Cookie di Marketing',
                    description: 'Questi cookie possono essere impostati tramite il nostro sito dai nostri partner pubblicitari. Possono essere utilizzati da queste aziende per costruire un profilo dei tuoi interessi e mostrarti annunci pertinenti su altri siti.',
                    linkedCategory: 'marketing'
                  },
                  {
                    title: 'Maggiori informazioni',
                    description: 'Per qualsiasi domanda riguardante la nostra politica sui cookie e le tue scelte, per favore <a href="mailto:futurecraft.workspace@gmail.com">contattaci</a>.'
                  }
                ]
              }
            }
          }
        }
      });
    }
  }, []);

  return null; 
};

export default CookieConsentBanner; 