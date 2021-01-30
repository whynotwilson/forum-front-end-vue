<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{name: 'admin-restaurant', params: {id: restaurant.id}}"
            class="btn btn-link"
          >
            Show
          </router-link>

          <router-link
            :to="{ name: 'admin-restaurant-edit', params: { id: restaurant.id }}"
            class="btn btn-link"
          >Edit
          </router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
        {
            "id": 1,
            "name": "Mrs. Juwan Welch",
            "tel": "(233) 242-4386 x819",
            "address": "10233 Feeney Harbor",
            "opening_hours": "08:00",
            "description": "officia",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.0300625536925",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 2,
            "name": "Dr. Ofelia Watsica",
            "tel": "071-357-4190",
            "address": "6687 Friesen Burgs",
            "opening_hours": "08:00",
            "description": "Dicta eius ex sapiente dolore eligendi amet. Aut repudiandae ut sed quas ad dolore ullam cum. Vero et non et sed ex delectus consequatur temporibus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=44.097986425245054",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 3,
            "name": "Ines Connelly",
            "tel": "373-712-6567 x5037",
            "address": "973 Nikolaus Junctions",
            "opening_hours": "08:00",
            "description": "sed delectus similique",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=35.233721686881346",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 4,
            "name": "Lyric Crona",
            "tel": "370.410.2215 x34493",
            "address": "595 Jaylen Lakes",
            "opening_hours": "08:00",
            "description": "eligendi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=41.98758865283556",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 5,
            "name": "Cletus Ritchie",
            "tel": "616.071.9948 x347",
            "address": "54853 Layla Centers",
            "opening_hours": "08:00",
            "description": "Autem sunt molestiae quo repellat est ea enim quo similique.\nQuia magni maiores perferendis est illo eum nihil rerum ab.\nNam corporis voluptate corporis voluptas commodi sint.\nSunt quia quia nisi voluptatibus aspernatur aut qui ut.\nVel debitis in nulla quia.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=19.458534420595154",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 6,
            "name": "Alvera Walter",
            "tel": "(321) 551-5612",
            "address": "00761 Clay Motorway",
            "opening_hours": "08:00",
            "description": "Et alias soluta omnis placeat. Quas nemo nihil accusantium accusantium nobis iste voluptatem. Qui suscipit esse sit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=99.01152585498092",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 7,
            "name": "Jaquan Prosacco",
            "tel": "(263) 879-9510 x10625",
            "address": "181 Hilpert Harbor",
            "opening_hours": "08:00",
            "description": "Ullam incidunt molestias. Facere quia doloribus molestiae. Eaque laboriosam nihil. Et qui repellat magnam aspernatur non et maiores id. Qui veniam unde et suscipit. Quam nihil sed.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.34270380158523",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 8,
            "name": "Raleigh Schmidt",
            "tel": "467.993.0342",
            "address": "61213 Morar Springs",
            "opening_hours": "08:00",
            "description": "harum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.016377935837646",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 9,
            "name": "Ernie Halvorson",
            "tel": "801.770.2489 x358",
            "address": "033 Gregorio Forest",
            "opening_hours": "08:00",
            "description": "Possimus necessitatibus omnis pariatur et veritatis quia nemo.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.6861869700708576",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 10,
            "name": "Cassandra King",
            "tel": "321.512.6894 x25508",
            "address": "76863 Angelica Villages",
            "opening_hours": "08:00",
            "description": "Aperiam quaerat odio eum.\nEos quo in consequatur sint.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=42.49966440878254",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 11,
            "name": "Juston Schultz",
            "tel": "(935) 124-6635",
            "address": "9257 Dicki Street",
            "opening_hours": "08:00",
            "description": "Porro deleniti nobis. Amet rerum repudiandae sed commodi. Quia facilis in voluptatem ut mollitia minus et ex non. Dignissimos neque odit provident sequi dolores vitae autem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.189760627853353",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 12,
            "name": "Mikayla Mayert",
            "tel": "1-572-054-8699 x4720",
            "address": "2672 Kertzmann Gateway",
            "opening_hours": "08:00",
            "description": "deleniti",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.39544708375365",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 13,
            "name": "Ahmad Kautzer",
            "tel": "968.496.5359",
            "address": "6720 Lafayette Corners",
            "opening_hours": "08:00",
            "description": "Et similique est minus vero accusantium ut alias unde. Dolorem facere odit. Ratione eum omnis eos. Eius labore ipsa consequatur dolorum est aut sit. Voluptatum iure numquam voluptate doloremque eveniet quod id velit doloremque. Non voluptatem voluptates fugit dolores inventore accusantium.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.73203590896631",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 14,
            "name": "Anabel Stiedemann",
            "tel": "1-688-193-8626",
            "address": "802 Gail Spurs",
            "opening_hours": "08:00",
            "description": "neque",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=38.468197804026815",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 15,
            "name": "Erling Oberbrunner",
            "tel": "1-941-967-8865 x52353",
            "address": "783 Duane Shoals",
            "opening_hours": "08:00",
            "description": "Ut officiis natus voluptas maiores. Sit animi veritatis amet culpa. Asperiores modi ab ab aut et.\n \rIn voluptas et perspiciatis omnis deserunt. Voluptas qui fugit dolore delectus. Maiores ut nesciunt veritatis optio aliquam dignissimos rem at. Quam dolor placeat. Sit nostrum at repellendus molestiae voluptas perferendis.\n \rMolestias neque sunt voluptatem sit aut unde dignissimos. Et omnis et aut et animi quisquam magni nisi. Aperiam cupiditate explicabo. Perferendis reiciendis minima et molestias dolorem aspernatur totam laborum. Soluta illum dolorem dolore voluptate omnis in vel.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.03295570947407",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 16,
            "name": "Queenie Stoltenberg IV",
            "tel": "(049) 321-1810",
            "address": "65332 Kessler Cove",
            "opening_hours": "08:00",
            "description": "Sed dolor reprehenderit et ad rerum repudiandae. Ratione non ex veniam unde fugit earum maiores veritatis. Est ratione libero officiis porro corrupti veritatis cupiditate sequi. Libero culpa et dolorem vel qui voluptatem culpa quam voluptatem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=96.7974341599859",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 17,
            "name": "Opal Jerde",
            "tel": "351.620.6583 x90987",
            "address": "30298 Herman Mission",
            "opening_hours": "08:00",
            "description": "Asperiores aliquam numquam. Nostrum aut dicta maiores vitae eum omnis qui velit exercitationem. Sed vel qui reiciendis veritatis facere architecto et.\n \rEnim quia perspiciatis temporibus illum alias distinctio ab. Laborum voluptatem sint quaerat. Dolores eligendi velit. Necessitatibus quisquam voluptatem.\n \rNon quia sit aliquam. Non nostrum est aperiam magnam distinctio ad. Fugiat aut ut aut quasi eum ipsum a a deserunt. Praesentium aut qui veritatis non. Velit id voluptatem et. Doloribus sunt reprehenderit provident neque velit sit delectus architecto.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.35215072827083",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 18,
            "name": "Roy Bernhard",
            "tel": "174-501-3728",
            "address": "02060 Price Keys",
            "opening_hours": "08:00",
            "description": "temporibus voluptatem sequi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.69349250731308",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 19,
            "name": "Melany Welch",
            "tel": "281-820-3522 x1942",
            "address": "9543 Rylee Walk",
            "opening_hours": "08:00",
            "description": "Est ipsum autem. Soluta quaerat fugit porro voluptatem dolorem quia ad et. Voluptatem minima velit earum accusantium.\n \rNostrum aut illo corporis deleniti sit. Pariatur vel voluptatem. Cum non est omnis veniam praesentium.\n \rEnim dolores debitis voluptatem commodi. In ducimus occaecati nesciunt. Placeat quisquam labore maxime eum. Vero quaerat veritatis. Temporibus qui aliquid.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=80.55933957589063",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 20,
            "name": "Forrest Zboncak",
            "tel": "661-424-7081",
            "address": "138 Ondricka Roads",
            "opening_hours": "08:00",
            "description": "aut quis molestiae",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=88.15498150576093",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 21,
            "name": "Lucinda Gutkowski",
            "tel": "(110) 139-3106 x9879",
            "address": "19481 McDermott Landing",
            "opening_hours": "08:00",
            "description": "Est harum repellendus excepturi in. Consectetur aspernatur quod molestiae. Et et deleniti molestiae.\n \rUt doloribus amet quia a fuga. Consectetur soluta hic ducimus blanditiis sed. Autem repudiandae voluptatem suscipit magnam et. Sed magni aut est cum molestiae aut aut aut. Minima vel ut maxime. Dolor neque velit necessitatibus deserunt et est dolor.\n \rVoluptatem vel eius blanditiis dignissimos officia. Aliquid exercitationem ipsam hic cumque neque quibusdam enim quidem omnis. Reprehenderit sed qui laboriosam sunt velit quo in voluptatem qui. Iste dolores dolore odio et iusto numquam sit. Delectus reiciendis provident vero. In quia quisquam voluptatem qui.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=18.964872632607776",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 22,
            "name": "Brooke Kuhic",
            "tel": "1-391-687-6090 x4853",
            "address": "2384 Rowena Greens",
            "opening_hours": "08:00",
            "description": "numquam voluptas quis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.18753063600191",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 23,
            "name": "Glenna Johns",
            "tel": "531.904.3071 x61253",
            "address": "600 Fisher Lights",
            "opening_hours": "08:00",
            "description": "asperiores consequatur praesentium",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.82444825264289",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 24,
            "name": "Maryam O'Conner",
            "tel": "813-800-6027 x225",
            "address": "0987 Gerlach Falls",
            "opening_hours": "08:00",
            "description": "Perferendis asperiores tenetur.\nQui consequatur autem asperiores doloribus perferendis repudiandae velit.\nIllum magni quam.\nVelit est quo est repellendus.\nProvident sit totam minus deleniti dicta officia natus neque.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=69.21565484144767",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 25,
            "name": "Daron Hansen",
            "tel": "969.748.0410",
            "address": "245 Schimmel Port",
            "opening_hours": "08:00",
            "description": "Laboriosam qui aliquam non incidunt est reiciendis. Architecto aperiam debitis magni eius placeat qui et vel. Quis dolorum molestiae porro odio numquam voluptate et perferendis. Cupiditate quae quasi sit dolorum cumque est.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.106105298633464",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 26,
            "name": "Bernie Kerluke",
            "tel": "(955) 313-0949 x6870",
            "address": "1845 Waylon Pines",
            "opening_hours": "08:00",
            "description": "saepe",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.40200759003767",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 27,
            "name": "Brooke Renner",
            "tel": "(559) 538-4793",
            "address": "895 Jean Point",
            "opening_hours": "08:00",
            "description": "quas",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=33.79470408409047",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 28,
            "name": "Kyla Nikolaus",
            "tel": "(618) 355-9033 x876",
            "address": "54843 Zion Square",
            "opening_hours": "08:00",
            "description": "deserunt",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.506376102802705",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 29,
            "name": "Dr. Ena Daniel",
            "tel": "938.093.8338",
            "address": "23169 Scarlett Expressway",
            "opening_hours": "08:00",
            "description": "Aut maxime non sed reprehenderit aliquid.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.59819987563818",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 30,
            "name": "Serena Stehr",
            "tel": "990.794.2520 x3225",
            "address": "486 Jazmyne Ferry",
            "opening_hours": "08:00",
            "description": "Autem non est non illo non. Cum voluptas voluptates. Et dolore dignissimos quas in.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.853542512016258",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 31,
            "name": "Mrs. Evan Murphy",
            "tel": "(358) 568-4361 x16318",
            "address": "873 Lowell Bypass",
            "opening_hours": "08:00",
            "description": "Molestiae eaque sint inventore nulla amet recusandae eum. Odit molestiae doloremque numquam aut. Placeat aperiam ratione sint ut magnam sunt fugit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.86804369445693",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 32,
            "name": "Ms. Marcos Feeney",
            "tel": "687.114.8798",
            "address": "63415 Satterfield Forest",
            "opening_hours": "08:00",
            "description": "Fugit aut adipisci.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=97.86897264257853",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 33,
            "name": "Kirk Pouros II",
            "tel": "701.084.7822 x574",
            "address": "47042 Connor Mews",
            "opening_hours": "08:00",
            "description": "Debitis quod ducimus laboriosam. Reiciendis minima ipsum minima repellendus. Ut maxime voluptatibus nam impedit aperiam. Corrupti eum ullam deserunt ut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.713225703780143",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 34,
            "name": "Liliana Rutherford",
            "tel": "795.628.2494 x798",
            "address": "402 Rey Manors",
            "opening_hours": "08:00",
            "description": "Dolor ipsam excepturi.\nMagnam voluptas dicta placeat.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.98662461875934",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 35,
            "name": "Ferne Boyle",
            "tel": "(333) 774-1706",
            "address": "3739 Marcos Oval",
            "opening_hours": "08:00",
            "description": "consectetur",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.7019181286124",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 36,
            "name": "Verna DuBuque",
            "tel": "707.785.9805 x5624",
            "address": "04063 Lyla Landing",
            "opening_hours": "08:00",
            "description": "Consequatur culpa odit voluptas provident. Repudiandae et eveniet perspiciatis tempore nemo ut rerum accusamus. Perspiciatis nulla omnis excepturi sapiente id perferendis ipsa numquam. Quia quidem in necessitatibus ex nihil odit voluptatum at.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=50.035298476110235",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 37,
            "name": "Ariane Carter",
            "tel": "437.215.1234 x588",
            "address": "308 Taurean Pine",
            "opening_hours": "08:00",
            "description": "Sint tempore quia quia praesentium. Eos animi velit laborum voluptatibus sit. Consequatur sed ipsam necessitatibus dolor asperiores quos. Ut dolores saepe dolore id ratione est quisquam.\n \rNumquam necessitatibus illum unde quod. Et praesentium dolorem repellat. Aut hic dolorum quo.\n \rUt odio repellat similique dolor quis quis ut soluta. Incidunt qui velit nihil accusamus ullam quis corrupti. Nobis iusto a alias.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.8397880150337498",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 38,
            "name": "Reggie Bailey",
            "tel": "1-618-616-3225 x930",
            "address": "241 Jacobi Row",
            "opening_hours": "08:00",
            "description": "magni molestiae veniam",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.312798879112913",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 39,
            "name": "Anna Corwin",
            "tel": "859.033.0630 x84396",
            "address": "8740 Jules Falls",
            "opening_hours": "08:00",
            "description": "Sed ut repellendus et autem ut explicabo blanditiis molestiae.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.079224962560414",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 40,
            "name": "Heaven Hudson",
            "tel": "020.601.0430",
            "address": "1291 Sipes Knoll",
            "opening_hours": "08:00",
            "description": "Quas voluptas sed nobis id repellendus sint et quidem. Velit id aut aut vero. Sapiente dicta tempore et. Sed enim sit hic. Quam quis delectus exercitationem repellat nam.\n \rRatione incidunt maxime sed. Magni nulla omnis facilis omnis. In et iure rerum.\n \rEst est odit corporis. Ipsa veniam minus totam tempore ex. Et provident rem praesentium libero numquam aut ipsa cumque. Quo eius qui.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.24581167307157",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 41,
            "name": "Jefferey Wiegand",
            "tel": "1-966-604-8029 x91598",
            "address": "53319 Stanford Ranch",
            "opening_hours": "08:00",
            "description": "consectetur",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.542019714143436",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 42,
            "name": "Eula Cummings",
            "tel": "1-621-146-6643",
            "address": "2459 Reese Stream",
            "opening_hours": "08:00",
            "description": "Quia quia nam sit quo expedita amet quaerat.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=79.37289476330022",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 43,
            "name": "Kurt Marvin",
            "tel": "956.746.9056",
            "address": "867 Brady Points",
            "opening_hours": "08:00",
            "description": "Voluptatem repellendus nobis aut est voluptatem porro. Illum iste perferendis a. Eius excepturi magni itaque quia ipsa temporibus recusandae. Soluta ratione libero possimus autem mollitia voluptate architecto fugit. Non quam accusamus sit mollitia fuga sed consectetur nulla placeat.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.37465175786385",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 44,
            "name": "Cassandre Abbott DDS",
            "tel": "(819) 601-0054",
            "address": "37385 Sauer Dam",
            "opening_hours": "08:00",
            "description": "perspiciatis ut similique",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.19390696811767",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 45,
            "name": "Dimitri Douglas",
            "tel": "765.538.4685 x57532",
            "address": "98451 Toy Freeway",
            "opening_hours": "08:00",
            "description": "Temporibus sed ut commodi aliquam quasi sapiente occaecati qui excepturi.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.919562837836275",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 46,
            "name": "Anna Ratke",
            "tel": "1-716-331-3739",
            "address": "211 Florian Gardens",
            "opening_hours": "08:00",
            "description": "Unde voluptatem qui enim et qui eos. Voluptatem qui ullam aut nam accusantium assumenda qui suscipit unde. Velit nesciunt laboriosam incidunt expedita vel quia provident voluptatem doloremque. Dolores reiciendis nostrum ea ipsa saepe natus debitis magnam.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.37648993669164",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 47,
            "name": "Vita Sipes",
            "tel": "378-032-0745 x5388",
            "address": "0724 Ted Falls",
            "opening_hours": "08:00",
            "description": "esse rem voluptate",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.921570039582143",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 48,
            "name": "Juvenal Hamill",
            "tel": "(486) 632-5203 x04197",
            "address": "3512 Freeda Square",
            "opening_hours": "08:00",
            "description": "Dolorem id autem iste repudiandae sit quod et qui.\nNeque non necessitatibus nam autem dolorem.\nUt repellendus soluta tenetur veniam cumque incidunt ut.\nRepellat sint fugit error.\nIn aut accusantium recusandae et ipsam dolorem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.48630048388245",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 49,
            "name": "Dusty Braun III",
            "tel": "1-612-520-7672 x5463",
            "address": "87500 Sauer Extensions",
            "opening_hours": "08:00",
            "description": "Itaque enim impedit sit quia qui. Illo ducimus ut enim officiis molestiae quia consequatur sed reiciendis. Sit eveniet aut pariatur sint ab blanditiis molestiae repellat. Accusamus earum non molestias voluptates necessitatibus. Reiciendis esse qui sit vitae.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.91485585398897",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        },
        {
            "id": 50,
            "name": "Salma Brakus",
            "tel": "1-956-081-8578",
            "address": "9010 Wyman Ville",
            "opening_hours": "08:00",
            "description": "Beatae eveniet ipsam qui exercitationem voluptas explicabo ad.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.976228570867654",
            "viewCounts": 0,
            "createdAt": "2021-01-25T05:34:56.000Z",
            "updatedAt": "2021-01-25T05:34:56.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-01-25T05:34:56.000Z",
                "updatedAt": "2021-01-25T05:34:56.000Z"
            }
        }
  ]
}

export default {
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    },

    deleteRestaurant (restaurantId) {
      console.log('restaurantId', restaurantId)
      this.restaurants = this.restaurants.filter(
        restaurant => restaurant.id !== restaurantId
      )
    }
  },
  
}
</script>