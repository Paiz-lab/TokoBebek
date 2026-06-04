// Data Produk
const products = [
    {
        id: 1,
        name: 'Bebek Hidup',
        category: 'bebek-hidup',
        price: 85000,
        unit: 'ekor',
        stock: 150,
        image: 'https://images.unsplash.com/photo-1568408968739-9b3e1b2e3d5d?w=400',
        description: 'Bebek hidup sehat dan berkualitas, siap untuk dipelihara atau dipotong',
        features: ['Usia 2-3 bulan', 'Berat 1.5-2 kg', 'Sehat dan aktif', 'Vaksin lengkap']
    },
    {
        id: 2,
        name: 'Telur Bebek Segar',
        category: 'telur',
        price: 3500,
        unit: 'butir',
        stock: 500,
        image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400',
        description: 'Telur bebek segar langsung dari peternakan, kaya nutrisi',
        features: ['Segar setiap hari', 'Ukuran besar', 'Kaya protein', 'Higienis']
    },
    {
        id: 3,
        name: 'Daging Bebek Segar',
        category: 'daging',
        price: 65000,
        unit: 'kg',
        stock: 80,
        image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400',
        description: 'Daging bebek segar tanpa lemak berlebih, cocok untuk berbagai masakan',
        features: ['Dipotong fresh', 'Tanpa bahan pengawet', 'Daging berkualitas', 'Bersih dan higienis']
    },
    {
        id: 4,
        name: 'Bebek Petelur',
        category: 'bebek-hidup',
        price: 95000,
        unit: 'ekor',
        stock: 75,
        image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400',
        description: 'Bebek petelur produktif, cocok untuk usaha telur bebek',
        features: ['Usia produktif', 'Produksi tinggi', 'Sehat dan terawat', 'Siap bertelur']
    },
    {
        id: 5,
        name: 'Telur Bebek Asin',
        category: 'telur',
        price: 5000,
        unit: 'butir',
        stock: 200,
        image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400',
        description: 'Telur bebek asin dengan rasa gurih dan lezat',
        features: ['Proses tradisional', 'Rasa gurih pas', 'Matang sempurna', 'Tahan lama']
    },
    {
        id: 6,
        name: 'Daging Bebek Fillet',
        category: 'daging',
        price: 75000,
        unit: 'kg',
        stock: 50,
        image: 'https://images.unsplash.com/photo-1588347818036-8fc8d1d6b7b7?w=400',
        description: 'Daging bebek fillet tanpa tulang, praktis untuk dimasak',
        features: ['Tanpa tulang', 'Mudah diolah', 'Porsi pas', 'Kualitas premium']
    }
];

// Phone number untuk WhatsApp (ganti dengan nomor Anda)
const WHATSAPP_NUMBER = '6281234567890';

// Format harga
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
}

// Get stock badge
function getStockBadge(stock) {
    if (stock > 100) {
        return '<span class="badge-stock badge-available">Stok Banyak</span>';
    } else if (stock > 20) {
        return '<span class="badge-stock badge-limited">Stok Terbatas</span>';
    } else if (stock > 0) {
        return '<span class="badge-stock badge-limited">Stok Sedikit</span>';
    } else {
        return '<span class="badge-stock badge-out">Habis</span>';
    }
}

// Generate WhatsApp link
function generateWhatsAppLink(product) {
    const message = `Halo, saya tertarik dengan produk:\n\n*${product.name}*\nHarga: ${formatPrice(product.price)}/${product.unit}\n\nApakah produk ini masih tersedia?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Render products
function renderProducts() {
    const container = document.getElementById('productsContainer');
    
    container.innerHTML = products.map(product => `
        <div class="product-card fade-in">
            <div class="relative">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="absolute top-4 right-4">
                    ${getStockBadge(product.stock)}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">${product.name}</h3>
                <p class="text-gray-600 text-sm mb-4">${product.description}</p>
                
                <div class="mb-4">
                    <ul class="space-y-1">
                        ${product.features.map(feature => `
                            <li class="text-sm text-gray-600">
                                <i class="fas fa-check text-primary mr-2"></i>${feature}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <span class="text-2xl font-bold text-primary">${formatPrice(product.price)}</span>
                        <span class="text-gray-600">/${product.unit}</span>
                    </div>
                    <span class="text-sm text-gray-500">Stok: ${product.stock}</span>
                </div>
                
                <a href="${generateWhatsAppLink(product)}" 
                   target="_blank"
                   class="btn-whatsapp w-full ${product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''}"
                   ${product.stock === 0 ? 'onclick="return false;"' : ''}>
                    <i class="fab fa-whatsapp mr-2"></i>
                    ${product.stock === 0 ? 'Stok Habis' : 'Pesan via WhatsApp'}
                </a>
            </div>
        </div>
    `).join('');
}

// Mobile menu toggle
document.getElementById('menuToggle').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mobileMenu').classList.add('hidden');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    
    // Add wave SVG
    const waveBottom = document.querySelector('.wave-bottom');
    if (waveBottom) {
        waveBottom.innerHTML = `
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        `;
    }
});
