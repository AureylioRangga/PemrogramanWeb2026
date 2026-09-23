async function muatDataTabel(url, kolomKunci, colspan, delayMs = 300) {
    const tbody = document.querySelector(".table-responsive table tbody");
    const loading = document.getElementById("loading-indicator");
    if (!tbody) return;

    loading.style.display = "block";
    tbody.innerHTML = "";

    try {
        await new Promise((resolve) => setTimeout(resolve, delayMs));

        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("Gagal mengambil data (status " + res.status + ")");
        }
        const daftar = await res.json();

        daftar.forEach(function (item) {
            const tr = document.createElement("tr");
            const selData = kolomKunci.map(function (k) {
                return "<td>" + item[k] + "</td>";
            }).join("");
            tr.innerHTML = selData +
                "<td>" +
                "<button type=\"button\">Edit</button> " +
                "<button type=\"button\">Detail</button> " +
                "<button type=\"button\" class=\"btn-hapus\">Hapus</button>" +
                "</td>";
            tbody.appendChild(tr);
        });
    } catch (err) {
        tbody.innerHTML =
            "<tr><td colspan=\"" + colspan + "\">Gagal memuat data: " + err.message + "</td></tr>";
    } finally {
        loading.style.display = "none";
        if (typeof perbaruiFilterCount === "function") perbaruiFilterCount();
    }
}

