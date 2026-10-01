// ===== Menu hamburger (JS-driven, menggantikan checkbox hack Jobsheet 3) =====
function initNavToggle() {
    const toggleBtn = document.getElementById("nav-toggle-btn");
    const nav = document.querySelector("header nav");
    if (!toggleBtn || !nav) return;

    toggleBtn.addEventListener("click", function () {
        nav.classList.toggle("nav-open");
    });
}

// ===== Konfirmasi hapus =====
function initHapusConfirm() {
    document.addEventListener("click", function (e) {
        const btn = e.target.closest(".btn-hapus");
        if (!btn) return;

        const row = btn.closest("tr");
        const nama = row ? row.querySelector("td")?.textContent : "data ini";
        const yakin = confirm("Yakin ingin menghapus \"" + nama + "\"?");
        if (yakin && row) {
            row.remove();
        }
    });
}

// ===== Filter tabel real-time =====
function initTableFilter() {
    const input = document.getElementById("search-input");
    const table = document.querySelector(".table-responsive table");
    if (!input || !table) return;

    input.addEventListener("keyup", function () {
        filterTabel(input.value);
    });

    perbaruiFilterCount();
}

function filterTabel(keyword) {
    const table = document.querySelector(".table-responsive table");
    if (!table) return;
    const kw = keyword.toLowerCase();

    table.querySelectorAll("tbody tr").forEach(function (row) {
        const kolomPertama = row.querySelector("td");
        const teks = kolomPertama ? kolomPertama.textContent.toLowerCase() : "";
        row.style.display = teks.includes(kw) ? "" : "none";
    });

    perbaruiFilterCount();
}

// Tugas mandiri no3: counter "Menampilkan X dari Y"
function perbaruiFilterCount() {
    const table = document.querySelector(".table-responsive table");
    const counter = document.getElementById("filter-count");
    if (!table || !counter) return;

    const semuaBaris = table.querySelectorAll("tbody tr");
    const tampil = Array.from(semuaBaris).filter(function (r) {
        return r.style.display !== "none";
    });
    const label = document.querySelector("main h2")?.textContent.includes("Anggota") ? "anggota" : "buku";
    counter.textContent = "Menampilkan " + tampil.length + " dari " + semuaBaris.length + " " + label;
}

// ===== Validasi form =====
function tampilkanError(input, pesan) {
    hapusError(input);
    const span = document.createElement("span");
    span.className = "error";
    span.textContent = pesan;
    input.insertAdjacentElement("afterend", span);
}

function hapusError(input) {
    const next = input.nextElementSibling;
    if (next && next.classList.contains("error")) {
        next.remove();
    }
}

// Validasi form 
function initValidasiForm() {
    const form = document.getElementById("form-tambah");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        let valid = true;

        const judul = form.querySelector("[name='judul'], [name='nama']");
        if (judul && judul.value.trim() === "") {
            tampilkanError(judul, "Field ini wajib diisi.");
            valid = false;
        } else if (judul) {
            hapusError(judul);
        }

        // Tugas mandiri no1: validasi ISBN : hanya angka & tanda hubung
        const isbn = form.querySelector("[name='isbn']");
        if (isbn && isbn.value.trim() !== "") {
            const polaIsbn = /^[0-9-]+$/;
            if (!polaIsbn.test(isbn.value.trim())) {
                tampilkanError(isbn, "ISBN hanya boleh berisi angka dan tanda hubung (-).");
                valid = false;
            } else {
                hapusError(isbn);
            }
        }

        if (!valid) {
            e.preventDefault();
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    initNavToggle();
    initHapusConfirm();
    initTableFilter();
    initValidasiForm();
});