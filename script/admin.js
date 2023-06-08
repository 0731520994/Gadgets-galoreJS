// featuredPosts: [
//     {
//     id: " ",
//     title: " ",
//     imageUrl: " ",
//     description: " ",
//     content: " ",
//     date: new Date( )
//     }
//     ]

// Object Posts are created on the Admin page

let table = document.getElementById('body');

// Create our array of objects

let featuredPosts = [{
    id: 01,
    title: "Razer Blade 17 (2022)",
    imageUrl: "https://i.postimg.cc/pL905NHp/Gaming-laptop.jpg",
    description: "CPU: 12th-generation Intel Core i7Graphics: Nvidia GeForce RTX 3080 TiRAM: 32GB DDR5Screen: 17.3-inch QHD, 240Hz, G-SyncStorage: 1TB M.2 PCIe NVMe SSD",
    content: "GAMING",
    date: new Date( )
    },

    {
        id: 02,
        title: "MacBook Pro 16-inch (M2, 2023)",
        imageUrl: "https://i.postimg.cc/43S0yznR/Programming-laptop.webp",
        description: "CPU: M2 Pro/M2 Max, both 12-core CPUGraphics: M2 Pro, 19-core GPU / M2 Max, 38-core GPURAM: M2 Pro, 16GB, 32GB / M2 Max, 64GB, 96GScreen: 16.2-inch Liquid Retina XDR displayStorage: 512GB, 1TB, 2TB, 4TB, 8TBPorts: SDXC card slot, HDMI, headphone jack, MagSafe 3, 3 x Thunderbolt 4 (USB-C)",
        content: "PROGRAMMING",
        date: new Date( )
    },

    {
        id: 03,
        title: "DELL XPS 15",
        imageUrl: "https://i.postimg.cc/4dvpqgD2/personal-laptop.jpg",
        description: "CPU: 12th-generation Intel Core i7Graphics: Nvidia GeForce RTX 3080 TiRAM: 32GB DDR5Screen: 17.3-inch QHD, 240Hz, G-SyncStorage: 1TB M.2 PCIe NVMe SSD",
        content: "PERSONAL",
        date: new Date( )
    },

    {
        id: 04,
        title: "",
        imageUrl: "https://i.postimg.cc/4dvpqgD2/personal-laptop.jpg",
        description: "CPU: 12th-generation Intel Core i7Graphics: Nvidia GeForce RTX 3080 TiRAM: 32GB DDR5Screen: 17.3-inch QHD, 240Hz, G-SyncStorage: 1TB M.2 PCIe NVMe SSD",
        content: "PERSONAL",
        date: new Date( )
    }
];

let blogPosts = localStorage.setItem('blogPosts', JSON.stringify(featuredPosts));
console.log(blogPosts);

document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('body');

    let featuredPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

featuredPosts.forEach(post => {
        table.innerHTML += `
            <tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td><img src="${post.imageUrl}" alt="${post.content}"></td>
                <td>
                    <button onclick="editPost(${post.id})">EDIT</button>
                </td>
                <td>
                    <button onclick="deletePost(${post.id})">DELETE</button>
                </td>
            </tr>
        `;
    });
}); 
    function editPost(id) {
        // Implement the logic to edit a blog post
        // You can redirect the user to a new page or open a modal for editing
    }

    function deletePost(id) {
        featuredPosts = featuredPosts.filter(post => post.id !== id);
        localStorage.setItem('blogPosts', JSON.stringify(featuredPosts));

        // Update the table in the admin.html page
        table.innerHTML = '';

        featuredPosts.forEach(post => {
            table.innerHTML += `
                <tr>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td><img src="${post.imageUrl}" alt="${post.content}"></td>
                    <td>
                        <button onclick="editPost(${post.id})">EDIT</button>
                    </td>
                    <td>
                        <button onclick="deletePost(${post.id})">DELETE</button>
                    </td>
                </tr>
            `;
        });
    };

