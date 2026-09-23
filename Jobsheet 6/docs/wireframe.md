# Wireframe & User Flow — SIMPUS-Mini (Jobsheet 4)

## 1. Login Petugas

+--------------------------------------+
|              SIMPUS-Mini             |
|--------------------------------------|
|                                      |
|        [ Login Petugas ]            |
|                                      |
|   Username : [______________]       |
|   Password : [______________]       |
|                                      |
|          [   Masuk   ]              |
|                                      |
|   Belum punya akun? Daftar di sini  |
+--------------------------------------+

## 2. Dashboard Petugas

+-----------------------------------------------------+
| SIMPUS-Mini      Beranda | Buku | Anggota | Peminjaman | (Nama Petugas) Logout |
|-------------------------------------------------------|
|  [Total Buku]   [Total Anggota]   [Sedang Dipinjam]    |
|                                                         |
|  Aksi Cepat:                                           |
|  [ + Peminjaman Baru ]   [ + Pengembalian ]            |
|                                                         |
|  Transaksi Terbaru                                     |
|  --------------------------------------------------    |
|  Anggota | Buku | Tgl Pinjam | Status                  |
+-----------------------------------------------------+

## 3. Form Peminjaman Baru

+--------------------------------------+
|  Form Peminjaman Buku                |
|--------------------------------------|
|  Anggota : [ dropdown pilih anggota ]|
|  Buku    : [ dropdown, hanya stok>0 ]|
|  Tanggal Pinjam : [ auto: hari ini ] |
|                                      |
|          [  Simpan Peminjaman  ]    |
+--------------------------------------+

## 4. Form Pengembalian

+--------------------------------------+
|  Pengembalian Buku                   |
|--------------------------------------|
|  Cari transaksi aktif:               |
|  [ nama anggota / judul buku ______ ]|
|                                      |
|  Anggota | Buku | Tgl Pinjam | [Kembalikan] |
+--------------------------------------+

## 5. Riwayat Transaksi

+--------------------------------------+
|  Riwayat Peminjaman — Siti Aminah    |
|--------------------------------------|
|  Buku            | Pinjam   | Kembali | Status      |
|  Laskar Pelangi   | 01/07    | 10/07   | Selesai     |
|  Bumi Manusia      | 15/07    | -       | Dipinjam    |
+--------------------------------------+

## User Flow: Peminjaman

[Petugas Login] -> [Dashboard] -> [Pilih menu "Peminjaman Baru"]
        -> [Pilih Anggota] -> [Pilih Buku (stok > 0)]
        -> [Simpan] -> [Stok buku berkurang 1] -> [Kembali ke Dashboard]
Aturan: buku hanya bisa dipilih kalau stok > 0.

## User Flow: Pengembalian

[Dashboard] -> [Menu "Pengembalian"] -> [Cari transaksi aktif (anggota/buku)]
        -> [Tandai "Dikembalikan"] -> [Stok buku bertambah 1]
        -> [Kembali ke Dashboard]

## Tugas Mandiri #3 — Wireframe: Registrasi Anggota Baru

+----------------------------------------+
|          Registrasi Anggota Baru         |
|------------------------------------------|
|  Nama         : [______________]        |
|  No. Anggota  : [______________]        |
|  Alamat       : [______________]        |
|  No. HP       : [______________]        |
|  Email        : [______________]        |
|  Jenis Kelamin: [ dropdown v ]          |
|            [   Daftar   ]               |
+------------------------------------------+

## Tugas Mandiri #4 — User Flow: Mencari Anggota yang Lewat Jatuh Tempo

Petugas Login -> Dashboard -> Menu "Riwayat"
  -> Filter status = "Terlambat" -> Daftar anggota terlambat ditampilkan
  -> Pilih salah satu anggota -> Lihat detail (buku dipinjam, tgl jatuh tempo)

Aturan: status "Terlambat" = belum dikembalikan DAN tanggal jatuh tempo
sudah lewat hari ini.