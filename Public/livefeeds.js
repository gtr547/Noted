const eventSource = new EventSource("/api/livefeeds");

const liveContainer = document.getElementById("live-container");

eventSource.onmessage = (event) =>{
    const data = JSON.parse(event.data);
    const quote = data.quote;
    liveContainer.textContent = quote;
}

eventSource.onerror = () =>{
    console.log(`Connection lost. Attempting to reconnect...`);
};