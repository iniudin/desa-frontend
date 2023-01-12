import { Accordion } from "flowbite-react";
import React from "react";

export default function FAQ() {
  return (
    <div className="container flex justify-center items-center mt-44">
      <div className="w-3/4">
        <h1 className="text-3xl text-center text-sky-700 font-bold mb-7">
          FAQ
        </h1>

        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>Apa itu Digital Desa ?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Digital Desa (DIGIDES) adalah Sistem Informasi yang dirancang
                untuk menangani berbagai hal dalam pengurusan dalam desa. Mulai
                dari administrasi dan pelayanan desa menggunakan website ataupun
                aplikasi pada Android. Sehingga dapat membantu masalah pelayanan
                desa secara komputerisasi.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Mengapa Harus Bergabung Dengan DIGIDES ?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Di era modern saat ini kita tidak bisa lepas dari digitalisasi
                sehingga semuanya dilakukan melalui internet. Termasuk dengan
                pengurusan surat-surat ataupun administrasi sehingga diperlukan
                penunjang bagi masyarakat untuk mempermudah hal itu. DIGIDES
                hadir dengan berbagai fitur yang dapat membantu masyarakat desa.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Keuntungan Menggunakan DIGIDES ?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Dengan bergabung bersama Digital Desa maka segala urusan
                administrasi, pelayanan masyarakat desa, pengurusan berkas
                perangkat desa, administrasi keuangan hingga administrasi
                pembangunan dan kas desa dapat diakses dengan mudah oleh
                perangkat desa maupun warga desa.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Fitur Apa Saja yang Dimiliki DIGIDES ?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Administrasi Desa, Bermanfaat untuk mendukung fungsi dan tugas
                kantor desa, termasuk administrasi kependudukan, perencanaan,
                pelaporan, pengelolaan asset, pengelolaan anggaran, aplikasi
                pelayana desa, aplikasi surat menyurat desa dan lain sebagainya.
                Pelayanan Desa, Mempermudah masyarakat dalam administrasi, yang
                meliputi pelayanan administrasi umum, kependudukan, nikah,
                pertanahan dan lain sebagainya. Perpajakan (PBB-P2), layanan
                khusus untuk memudahkan dalam pencatatan pajak di desa Anda
                mulai dari rekapitulasi perpajakan, laporan perpajakan
                perminggu, data penerimaan harian pajak bumi dan bangunan, serta
                daftar himpunan ketetapan pajak dan pembayaran. Bantuan Sosial
                (Bansos), layanan khusus untuk memudahkan dalam pencatatan pajak
                di desa Anda mulai dari rekapitulasi perpajakan, laporan
                perpajakan perminggu, data penerimaan harian pajak bumi dan
                bangunan, serta daftar himpunan ketetapan pajak dan pembayaran.
                Website Profil Desa, Kami membantu Anda untuk memiliki dan
                memaksimalkan halaman website profil desa yang memuat berbagai
                konten menarik dan penting untuk dibaca, mulai dari profil
                pemerintahan, publikasi kegiatan, data statistik, sampai dengan
                potensi wisata yang dimiliki oleh desa. Aplikasi Android, Dengan
                aplikasi DIGIDES, warga dapat mengakses informasi mengenai desa,
                memanfaatkan fitur marketplace yang terintegrasi di dalamnya,
                dan mengurus berbagai layanan kependudukan hanya dengan beberapa
                usapan dan ketukan di layar ponsel warga Anda. Andi Smart, Andi
                Smart memiliki perangkat lunak yang sudah terintegrasi dengan
                aplikasi DIGIDES sehingga warga desa yang memiliki aplikasi
                tersebut dapat melakukan request persuratan dan mencetak surat
                langsung di kantor desa melalui Andi Smart ini. Absensi dan Buku
                Tamu, Absensi Dan Buku Tamu ini merupakan pengganti absensi &
                buku tamu manual. Fitur apa saja yang Sobat Desa bisa nikmati?
                Penginputan data aparat desa yang keluar dan masuk, begitu pula
                dengan kunjungan tamu desa akan lebih terperinci dan akurat.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
}
