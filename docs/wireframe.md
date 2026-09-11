# Wireframe & User Flow — SIMPUS-Mini (Jobsheet 4)

## 1. Login Petugas

+----------------------------------------+
|              SIMPUS-Mini                |
|------------------------------------------|
|          [ Login Petugas ]              |
|   Username : [______________]           |
|   Password : [______________]           |
|            [   Masuk   ]                |
+------------------------------------------+

## 2. Dashboard Petugas

+-------------------------------------------------------------+
| SIMPUS-Mini  Beranda | Buku | Anggota | Peminjaman   Logout |
|-----------------------------------------------------------------|
|  [Total Buku]   [Total Anggota]   [Sedang Dipinjam]          |
|  Aksi Cepat:                                                   |
|  [ + Peminjaman Baru ]   [ + Pengembalian ]                   |
|  Transaksi Terbaru                                             |
|  Anggota | Buku | Tgl Pinjam | Status                         |
+-------------------------------------------------------------+

## 3. Form Peminjaman Baru

+----------------------------------------+
|         Form Peminjaman Baru             |
|------------------------------------------|
|  Pilih Anggota : [ dropdown v ]         |
|  Pilih Buku     : [ dropdown v ]         |
|  Tanggal Pinjam : [__________]           |
|            [   Simpan   ]               |
+------------------------------------------+

## 4. Form Pengembalian

+----------------------------------------+
|          Form Pengembalian               |
|------------------------------------------|
|  Cari transaksi aktif: [___________]    |
|  Anggota | Buku | Tgl Pinjam | [Tandai  |
|                                Kembali] |
+------------------------------------------+

## 5. Riwayat Transaksi

+-------------------------------------------------------------+
|                     Riwayat Transaksi                         |
|-----------------------------------------------------------------|
|  Filter: [ Semua v ]  [ Dikembalikan v ]  [ Terlambat v ]     |
|  Anggota | Buku | Tgl Pinjam | Tgl Kembali | Status            |
+-------------------------------------------------------------+

## User Flow: Peminjaman

Petugas Login -> Dashboard -> Pilih "Peminjaman Baru" -> Pilih Anggota
  -> Pilih Buku (stok > 0) -> Simpan -> Stok berkurang 1

Aturan: buku hanya bisa dipilih kalau stok > 0.

## User Flow: Pengembalian

Dashboard -> Menu "Pengembalian" -> Cari transaksi aktif
  -> Tandai "Dikembalikan" -> Stok bertambah 1 -> Kembali ke Dashboard

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