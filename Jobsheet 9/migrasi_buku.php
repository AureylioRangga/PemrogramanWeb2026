<?php
require __DIR__ . '/includes/koneksi.php';

$jsonPath = __DIR__ . '/data/buku.json';

if (!file_exists($jsonPath)) {
    die("File data/buku.json tidak ditemukan.");
}

$data = json_decode(file_get_contents($jsonPath), true);

if ($data === null) {
    die("Gagal membaca atau parsing file JSON.");
}

$stmt = $pdo->prepare(
    "INSERT INTO buku (judul, pengarang, tahun, isbn, stok, kategori)
     VALUES (:judul, :pengarang, :tahun, :isbn, :stok, :kategori)"
);

$jumlahSukses = 0;
foreach ($data as $buku) {
    $stmt->execute([
        'judul' => $buku['judul'] ?? '',
        'pengarang' => $buku['pengarang'] ?? '',
        'tahun' => (int) ($buku['tahun'] ?? 0),
        'isbn' => $buku['isbn'] ?? '',
        'stok' => (int) ($buku['stok'] ?? 0),
        'kategori' => $buku['kategori'] ?? '',
    ]);
    $jumlahSukses++;
}

echo "Migrasi selesai. $jumlahSukses data buku berhasil dipindahkan ke database.";