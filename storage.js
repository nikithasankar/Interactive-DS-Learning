globalThis.AlgoStore = {
 read(key, fallback) { try {const value = JSON.parse(localStorage.getItem(key)); if(value === null || typeof value !== typeof fallback || (typeof fallback === 'object' && Array.isArray(value) !== Array.isArray(fallback))) return fallback; return value;} catch {return fallback;} },
 write(key, value) { try {localStorage.setItem(key, JSON.stringify(value)); return true;} catch {this.warn(); return false;} },
 warn() {if (document.getElementById('storageWarning')) return; const note=document.createElement('p'); note.id='storageWarning'; note.setAttribute('role','alert'); note.textContent='Browser storage is unavailable or full. Changes cannot be saved.'; document.body.prepend(note);}
};
