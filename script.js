console.log("DwiQyu Shop Loaded");

document.querySelectorAll(".btn").forEach(btn=>{
btn.addEventListener("click",()=>{
navigator.vibrate?.(50);
});
});