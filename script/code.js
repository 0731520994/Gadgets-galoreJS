document.addEventListener('DOMContentLoaded', function() {
    const featuredPostsContainer = document.getElementById('featuredPostsContainer');

    let featuredPosts = [
        {
            id: 1,
            title: "Razer Blade 17 (2022)",
            imageUrl: "https://i.postimg.cc/pL905NHp/Gaming-laptop.jpg",
            description: "CPU: 12th-generation Intel Core i7Graphics: Nvidia GeForce RTX 3080 TiRAM: 32GB DDR5Screen: 17.3-inch QHD, 240Hz, G-SyncStorage: 1TB M.2 PCIe NVMe SSD",
            content: "GAMING",
            date: new Date()
        },
        {
            id: 2,
            title: "MacBook Pro 16-inch (M2, 2023)",
            imageUrl: "https://i.postimg.cc/43S0yznR/Programming-laptop.webp",
            description: "CPU: M2 Pro/M2 Max, both 12-core CPUGraphics: M2 Pro, 19-core GPU / M2 Max, 38-core GPURAM: M2 Pro, 16GB, 32GB / M2 Max, 64GB, 96GScreen: 16.2-inch Liquid Retina XDR displayStorage: 512GB, 1TB, 2TB, 4TB, 8TBPorts: SDXC card slot, HDMI, headphone jack, MagSafe 3, 3 x Thunderbolt 4 (USB-C)",
            content: "PROGRAMMING",
            date: new Date()
        },
        {
            id: 3,
            title: "DELL XPS 15",
            imageUrl: "https://i.postimg.cc/4dvpqgD2/personal-laptop.jpg",
            description: "CPU: 12th-generation Intel Core i7Graphics: Nvidia GeForce RTX 3080 TiRAM: 32GB DDR5Screen: 17.3-inch QHD, 240Hz, G-SyncStorage: 1TB M.2 PCIe NVMe SSD",
            content: "PERSONAL",
            date: new Date()
        },
        {
            id: 4,
            title: "Post 4",
            imageUrl: "https://example.com/image4.jpg",
            description: "This is the description of Post 4.",
            content: "CONTENT",
            date: new Date()
        }
    ];

    featuredPosts.forEach(post => {
        const card = `
            <div class="card">
                <img src="${post.imageUrl}" class="card-img-top" alt="${post.title}">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.description}</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        `;

        featuredPostsContainer.innerHTML += card;
    });
});
