<?php
session_start();
require __DIR__ . '/../includes/koneksi.php';

$nama = trim($_POST['nama'] ?? '');
$no_anggota = trim($_POST['no_anggota'] ?? '');
$alamat = trim($_POST['alamat'] ?? '');
$no_hp = trim($_POST['no_hp'] ?? '');
$email = trim($_POST['email'] ?? '');

$errors = [];
if ($nama === '') $errors[] = "Nama wajib diisi.";
if ($no_anggota === '') $errors[] = "No. Anggota wajib diisi.";

if (!empty($errors)) {
    $_SESSION['flash'] = ['type' => 'error', 'pesan' => implode(' ', $errors)];
    header('Location: tambah.php');
    exit;
}

try {
    $stmt = $pdo->prepare(
        "INSERT INTO anggota (nama, no_anggota, alamat, no_hp, email)
         VALUES (:nama, :no_anggota, :alamat, :no_hp, :email)
         RETURNING id"
    );
    $stmt->execute([
        'nama' => $nama, 'no_anggota' => $no_anggota,
        'alamat' => $alamat, 'no_hp' => $no_hp, 'email' => $email,
    ]);
} catch (PDOException $e) {
    $_SESSION['flash'] = ['type' => 'error', 'pesan' => 'Gagal menyimpan: No. Anggota sudah terdaftar.'];
    header('Location: tambah.php');
    exit;
}

$_SESSION['flash'] = ['type' => 'success', 'pesan' => 'Anggota berhasil ditambahkan.'];
header('Location: list.php');
exit;
