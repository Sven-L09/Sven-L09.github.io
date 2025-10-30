interface DisclaimerModalProps {
  show: boolean;
  onAccept: () => void;
}

export function DisclaimerModal({ show, onAccept }: DisclaimerModalProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="bg-slate-900 border border-amber-500/30 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-amber-500 mb-2">⚠️ Wichtiger Hinweis</h2>
          <div className="w-16 h-1 bg-amber-500 mb-4"></div>
        </div>
        
        <div className="space-y-4 text-slate-300">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded p-4">
            <h3 className="font-bold text-white mb-2">🎓 Bildungsprojekt</h3>
            <p className="text-sm">
              Diese Website wurde ausschliesslich zu Schulungs- und Bildungszwecken erstellt 
              und dient als Demonstrationsprojekt für Webentwicklung.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <h3 className="font-bold text-white">Rechtliche Hinweise:</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Diese Website ist <strong className="text-white">nicht offiziell</strong> und 
                steht in <strong className="text-white">keiner Verbindung zu Riot Games</strong>.
              </li>
              <li>
                Alle Marken, Logos und Bilder von League of Legends sind Eigentum von 
                <strong className="text-white"> Riot Games, Inc.</strong>
              </li>
              <li>
                Die Inhalte dienen <strong className="text-white">ausschliesslich Bildungszwecken</strong> und 
                werden nicht kommerziell genutzt.
              </li>
              <li>
                Für offizielle Informationen besuchen Sie: 
                <strong className="text-amber-500"> www.leagueoflegends.com</strong>
              </li>
              <li>
                <strong className="text-white">Keine Gewähr</strong> für Richtigkeit, 
                Vollständigkeit oder Aktualität der Informationen.
              </li>
              <li>
                Die Nutzung erfolgt auf <strong className="text-white">eigene Verantwortung</strong>.
              </li>
            </ul>

            <p className="pt-3 text-xs text-slate-400 italic">
              League of Legends™ ist eine Marke von Riot Games, Inc. 
              Die Verwendung erfolgt im Rahmen der Fair-Use-Richtlinien für Bildungszwecke.
            </p>
          </div>
        </div>

        <button
          onClick={onAccept}
          className="mt-6 w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Verstanden und fortfahren
        </button>
      </div>
    </div>
  );
}
