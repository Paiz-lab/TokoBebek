// Google Apps Script – Toko Bebek Segar Pak Haji
// Paste di script.google.com → Deploy sebagai Web App

const SPREADSHEET_ID = '1mLKOSl0QSc-l2JxayKUvlk5-CqMdKwHcw8PGS7rwkls';
const SHEET_NAME = 'Pesanan';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'No', 'Tanggal', 'Waktu', 'Nama Pembeli', 'No HP', 'Alamat',
        'Produk', 'Satuan', 'Harga Satuan', 'Jumlah', 'Total', 'Catatan', 'Promo', 'Status'
      ]);
      sheet.getRange(1, 1, 1, 14)
        .setBackground('#1a1208')
        .setFontColor('#f0d080')
        .setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    const now = new Date();
    const no      = sheet.getLastRow();
    const tanggal = Utilities.formatDate(now, 'Asia/Jakarta', 'dd/MM/yyyy');
    const waktu   = Utilities.formatDate(now, 'Asia/Jakarta', 'HH:mm:ss');

    sheet.appendRow([
      no,
      tanggal,
      waktu,
      data.nama,
      data.noHp,
      data.alamat  || '-',
      data.produk,
      data.satuan  || '-',
      data.harga,
      data.jumlah,
      data.total,
      data.catatan || '-',
      data.promo   || '-',
      'Baru'
    ]);

    // Warnai baris baru selang-seling
    const row = sheet.getLastRow();
    if (row % 2 === 0) {
      sheet.getRange(row, 1, 1, 14).setBackground('#fdf6ec');
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Pesanan berhasil dicatat!' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'API aktif – Bebek Segar Pak Haji' }))
    .setMimeType(ContentService.MimeType.JSON);
}
