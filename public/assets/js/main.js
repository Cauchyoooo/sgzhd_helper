async function loadData(){
  try{
    const res = await fetch("data/data.json");
    if(!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    const thead = document.querySelector("#table thead");
    const tbody = document.querySelector("#table tbody");
    if(!Array.isArray(data) || data.length === 0){
      tbody.innerHTML = "<tr><td>无数据</td></tr>";
      return;
    }
    const headers = Object.keys(data[0]);
    thead.innerHTML = "<tr>" + headers.map(h => "<th>"+h+"</th>").join("") + "</tr>";
    tbody.innerHTML = data.map(row => "<tr>" + headers.map(h => "<td>"+(row[h] ?? "")+"</td>").join("") + "</tr>").join("");
  }catch(err){
    console.error("加载数据失败", err);
    const tbody = document.querySelector("#table tbody");
    tbody.innerHTML = "<tr><td>加载数据失败</td></tr>";
  }
}
loadData();
