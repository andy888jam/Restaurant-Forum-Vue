<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
            >Show</router-link
          >

          <router-link
            :to="{
              name: 'admin-restaurant-edit',
              params: { id: restaurant.id }
            }"
            class="btn btn-link"
            >Edit</router-link
          >

          <button
            @click.stop.prevent="deleteRestaurants(restaurant.id)"
            type="button"
            class="btn btn-link"
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
      id: 1,
      name: "Whitney Kreiger III",
      tel: "(960) 053-2333",
      address: "27059 Padberg Estate",
      opening_hours: "08:00",
      description: "atque",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=46.25370848405821",
      viewCounts: 1,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-12T15:11:24.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 2,
      name: "Luella Vandervort",
      tel: "1-323-694-6274 x83283",
      address: "517 Rasheed Plaza",
      opening_hours: "08:00",
      description:
        "Distinctio sint voluptates perspiciatis rerum eaque rem blanditiis amet non.\nIusto voluptatum quos ullam fuga quos officiis laborum necessitatibus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=21.4080966813458",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 3,
      name: "Tressie Jakubowski",
      tel: "(725) 558-1659",
      address: "817 Alfred Bridge",
      opening_hours: "08:00",
      description: "culpa cum eum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=69.6113196897054",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 4,
      name: "Shanie Kerluke",
      tel: "(063) 355-8159",
      address: "519 Hank Islands",
      opening_hours: "08:00",
      description: "dicta consequatur in",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.6838604228705",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 5,
      name: "Sonya Schuppe",
      tel: "(231) 448-7025 x416",
      address: "0516 Parisian Spurs",
      opening_hours: "08:00",
      description: "corrupti velit pariatur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=27.732834534256924",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 6,
      name: "Cornelius Klocko",
      tel: "(886) 281-1351 x9054",
      address: "940 Frami Canyon",
      opening_hours: "08:00",
      description: "dolores quis omnis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.30120666619766",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 7,
      name: "Margaret Leannon III",
      tel: "519-565-3972 x70443",
      address: "77419 Reichert Park",
      opening_hours: "08:00",
      description:
        "Aut aperiam qui quo.\nInventore quia ullam adipisci rerum.\nRepudiandae aut voluptas odit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.32509263101944",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 8,
      name: "Lilly Boyer",
      tel: "318.065.6782 x502",
      address: "534 Kris Mission",
      opening_hours: "08:00",
      description: "Voluptatem mollitia est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.57695748512124",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 9,
      name: "Mrs. Adrianna Botsford",
      tel: "253-201-1504",
      address: "705 Broderick Lock",
      opening_hours: "08:00",
      description:
        "Fuga deserunt voluptatem ex culpa incidunt sapiente adipisci aut et. Rem quos atque id debitis ut excepturi impedit. Repellat itaque et eos laboriosam quibusdam omnis cum. Aut ut cupiditate beatae veniam. Qui totam qui ut reiciendis.\n \rFugit inventore dolores in dicta vero commodi temporibus perferendis temporibus. Ducimus voluptatem doloribus enim sit. Laudantium ipsum dignissimos in et et sint omnis distinctio.\n \rAt et iusto dolores officiis corporis enim sunt quasi. Omnis dolores magnam. Libero quia voluptatibus vel.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=33.92530051772955",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 10,
      name: "Verner Haag III",
      tel: "609-142-7630 x028",
      address: "57624 Ferry Crescent",
      opening_hours: "08:00",
      description:
        "Et eius qui quam. Ipsa blanditiis earum in temporibus impedit illo magni earum. Voluptatem debitis dolor molestiae consequatur saepe dignissimos et consectetur necessitatibus.\n \rQuia aspernatur sapiente dignissimos harum. Numquam eos vitae veritatis totam debitis. Et dolores eveniet rerum omnis. Non et dolorem eius dolorem omnis qui. Provident officiis nisi.\n \rLabore a voluptatibus natus rem. Ipsa debitis magnam velit aut dolorem ut fugiat provident. Commodi doloribus in nihil quibusdam ducimus et vitae at sint. Porro itaque incidunt eos repudiandae voluptatum cupiditate repellat.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.560855911253704",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 11,
      name: "Leann Towne",
      tel: "109.409.8699 x2056",
      address: "5007 Champlin Expressway",
      opening_hours: "08:00",
      description:
        "Ut ut maiores eaque dolores nostrum. Eos id velit eius esse enim voluptatem. Ex atque commodi.\n \rAliquid molestias dolor ad rem aperiam. Possimus nam nesciunt nihil sed aut repellendus est. Voluptatum vel et temporibus. Nobis repudiandae omnis et eaque consectetur temporibus ducimus possimus. Omnis at debitis doloribus voluptas.\n \rQuam totam sunt et provident. Adipisci perspiciatis necessitatibus dolorum ea voluptate eaque molestiae deleniti. Qui eius cupiditate adipisci atque sequi voluptatibus eum soluta doloribus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=1.8699099684704512",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 12,
      name: "Maiya King",
      tel: "835.675.8439 x44527",
      address: "87108 Hyman Station",
      opening_hours: "08:00",
      description:
        "Esse commodi dolore nemo ratione non voluptatibus quidem hic. Quos nobis saepe nostrum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.2238942361106693",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 13,
      name: "Marcelino Volkman",
      tel: "154-568-1911",
      address: "85161 Brown Cliff",
      opening_hours: "08:00",
      description: "vitae",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=50.922764224152296",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 14,
      name: "Gaylord Okuneva",
      tel: "(178) 500-7498 x94773",
      address: "2377 Adela Shores",
      opening_hours: "08:00",
      description:
        "Dicta autem eveniet magnam ut atque accusamus sit. Nobis dolores quod doloribus illo nesciunt ipsum. Eligendi quibusdam qui eaque culpa laborum enim sint deserunt. Quia sed et deleniti autem ipsam illo tempore nihil rem. Iste voluptas placeat. At voluptas sunt id ea asperiores.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=94.34032497435541",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 15,
      name: "Judd Wyman Sr.",
      tel: "164.446.1117",
      address: "272 Mariela Street",
      opening_hours: "08:00",
      description:
        "Non recusandae accusamus inventore ut et numquam. Dignissimos quam molestiae quo quia beatae quo est. Sit eos commodi omnis rerum perspiciatis nobis est. Minus dicta qui atque et quia cupiditate vel facere. Eius libero non non perspiciatis est voluptatibus quia.\n \rSit et neque qui explicabo et sunt. Deserunt quis natus modi quis delectus nesciunt. Sit animi doloribus doloremque et. Id id sunt a.\n \rPerspiciatis corrupti laboriosam iste magni. Numquam perferendis qui id assumenda. Vel aliquid doloribus harum neque voluptatem nisi id soluta ab. Aut nisi adipisci itaque porro. Ullam tempora alias occaecati non enim autem fugit deleniti.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=45.35509174930714",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 16,
      name: "Mr. Burdette Nienow",
      tel: "1-556-981-1229 x4809",
      address: "61406 Boyle Turnpike",
      opening_hours: "08:00",
      description: "illo velit maiores",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=71.05066724242515",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 17,
      name: "Simeon Grant",
      tel: "(562) 024-9187 x4228",
      address: "5391 Watson Roads",
      opening_hours: "08:00",
      description:
        "Eveniet eligendi molestias et reprehenderit molestiae et voluptate voluptate. Voluptatem et doloribus rerum. Non dignissimos animi possimus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.879340631632336",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 18,
      name: "Orland Jast",
      tel: "1-626-209-5959 x55765",
      address: "219 Dooley Mission",
      opening_hours: "08:00",
      description:
        "Adipisci culpa et amet eos molestias rerum omnis vel cum. Est voluptatibus cupiditate necessitatibus quasi libero id provident et explicabo. Doloremque sed nam voluptatibus voluptatem sapiente id quo voluptas. Sint voluptatibus consequatur impedit. Ut eum dignissimos odio ea provident facilis deserunt qui saepe.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=65.16532848819008",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 19,
      name: "Skyla O'Conner",
      tel: "(118) 078-6674 x28420",
      address: "7395 Liliane Corners",
      opening_hours: "08:00",
      description: "omnis ipsam eos",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.06095333217453",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 20,
      name: "Miss Larry Ankunding",
      tel: "187-973-1943",
      address: "46922 Lexus Cliff",
      opening_hours: "08:00",
      description:
        "Dolores officiis quas possimus et sint voluptates culpa aspernatur quas. Voluptas enim illo. Esse saepe in perspiciatis saepe fugiat voluptatem quia eum. Aut voluptatum deserunt laborum repudiandae enim.\n \rDolor illo unde a eaque voluptatibus laboriosam sint et. Inventore optio nesciunt. Vel sed officiis cum sequi. Asperiores numquam dignissimos nesciunt illo delectus iure voluptatibus qui. Et rerum tenetur voluptates minima iste fugit sed.\n \rBeatae explicabo voluptatum numquam aut labore doloribus sunt et. Voluptatem nihil est aut et voluptate vero accusamus ut explicabo. Aut doloribus inventore ducimus ipsum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=25.016680505758494",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 21,
      name: "Fausto Rippin",
      tel: "1-882-722-2063 x60154",
      address: "11502 Reanna Freeway",
      opening_hours: "08:00",
      description:
        "Consectetur illo et exercitationem distinctio facilis.\nId ex omnis est pariatur deserunt alias vitae maiores fugit.\nSit et dignissimos ipsam occaecati pariatur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=33.33409440915953",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 22,
      name: "Mr. Mikayla Oberbrunner",
      tel: "644-864-2241 x8104",
      address: "0199 Witting Cape",
      opening_hours: "08:00",
      description:
        "Et voluptatem deleniti facilis libero fugiat dolorum deserunt. Omnis aspernatur aut. Aliquam dolore explicabo dolor natus neque veniam. Est eaque beatae sed porro. Aspernatur fuga rerum distinctio est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.33218380231806",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 23,
      name: "Herminio Ortiz",
      tel: "1-104-539-2238",
      address: "734 Myriam Prairie",
      opening_hours: "08:00",
      description: "rem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.0000573652779",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 24,
      name: "Miss Abraham Toy",
      tel: "(315) 030-7232",
      address: "6469 Balistreri Key",
      opening_hours: "08:00",
      description:
        "Officia illum corrupti sint minima dicta aperiam autem dolor.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.54162369015266",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 25,
      name: "Gladyce Konopelski",
      tel: "807-182-0598 x18195",
      address: "625 Arturo Brook",
      opening_hours: "08:00",
      description: "voluptates asperiores occaecati",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=32.40298434016757",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 26,
      name: "Schuyler Conn",
      tel: "979.705.4210",
      address: "510 Ben Square",
      opening_hours: "08:00",
      description: "quis sequi rerum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.59000524393963",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 27,
      name: "Ethelyn Grant",
      tel: "1-624-083-7376",
      address: "00445 Klein Groves",
      opening_hours: "08:00",
      description: "labore nostrum necessitatibus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=19.687678409966946",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 28,
      name: "Ms. Johan Douglas",
      tel: "350-671-9867 x66998",
      address: "653 Rowland Flat",
      opening_hours: "08:00",
      description: "odit atque atque",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.8476447729586",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 29,
      name: "Deron Treutel",
      tel: "809.343.8967 x1539",
      address: "281 Reichert Bridge",
      opening_hours: "08:00",
      description:
        "Alias totam officiis et ut voluptatem eum consequuntur.\nNisi quis hic eius et eum ipsam et consequatur.\nVoluptatum quod esse sed perferendis reprehenderit aspernatur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=26.07391074341676",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 30,
      name: "Kelvin Robel",
      tel: "792.504.8277 x309",
      address: "05232 Boehm Oval",
      opening_hours: "08:00",
      description:
        "In non hic et exercitationem.\nEnim magnam nostrum ratione rem sint corrupti veniam.\nEum sequi eveniet suscipit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=18.648453424523346",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 31,
      name: "Emie Miller",
      tel: "386-292-3933 x9304",
      address: "9289 Okey Radial",
      opening_hours: "08:00",
      description:
        "Voluptas nihil et quaerat minus occaecati enim. Vitae iusto architecto ducimus quod recusandae. Beatae accusantium beatae. Ut enim similique quas.\n \rQuasi consequatur quaerat debitis. Voluptatem perspiciatis quisquam mollitia suscipit debitis error dolorum totam. Eaque libero consequatur veritatis. Minima voluptates voluptas officia reprehenderit hic nemo voluptatem et. Quaerat aliquam provident deserunt dolor quos omnis. Dolore amet hic assumenda reprehenderit nihil.\n \rDolorem dolores assumenda praesentium cumque voluptatem ullam rerum rerum. Eaque aliquid rerum eaque officia dolor laboriosam necessitatibus at. In pariatur dignissimos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.173834293222633",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 32,
      name: "Ardella Kreiger",
      tel: "931-293-0550",
      address: "334 Kertzmann Springs",
      opening_hours: "08:00",
      description: "ut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=27.547249349886947",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 33,
      name: "Stanley Wolf",
      tel: "1-136-984-8520 x22804",
      address: "65909 Marianne Fords",
      opening_hours: "08:00",
      description:
        "Illum molestiae suscipit ut necessitatibus perferendis nihil consequatur asperiores. Est ducimus reprehenderit. Vitae sed voluptas odit perspiciatis commodi ratione id velit. Quo fuga corrupti perspiciatis dolor incidunt aliquam sit nobis. Ut deserunt ipsam aut nulla tempore necessitatibus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=2.5227212855582826",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 34,
      name: "Kaitlin Hermann",
      tel: "1-458-114-8368 x9891",
      address: "9941 Anna Spring",
      opening_hours: "08:00",
      description:
        "Exercitationem assumenda voluptatem voluptate maiores nesciunt quo hic non.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.62765568140327",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 35,
      name: "Isai Greenfelder",
      tel: "061.699.4178",
      address: "17663 Thompson Gardens",
      opening_hours: "08:00",
      description:
        "Temporibus ut officia. Voluptatem quidem aliquam eius harum quod et est. Eius id voluptatem culpa autem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.766231950045395",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 36,
      name: "Ms. Vern Ebert",
      tel: "(670) 526-5782",
      address: "93607 Blanche Lane",
      opening_hours: "08:00",
      description:
        "Reiciendis voluptas veritatis consequatur animi et error. Laudantium et quia aut deserunt. Veritatis et possimus amet repudiandae libero tempora quia blanditiis. Aut et omnis officia. Pariatur ut tempora eum fuga.\n \rModi rerum sint blanditiis eos. Aspernatur qui a non vero qui est dolores. Architecto aperiam aut ipsam eos est libero.\n \rMagnam omnis adipisci porro et dolores repudiandae. Facere qui nisi. Necessitatibus alias excepturi qui adipisci. Explicabo voluptas iusto perspiciatis at labore earum sint tempora. Aspernatur nisi aut aliquid qui tempore distinctio. Dolorum suscipit in ab eligendi ut velit et natus vitae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.2287882095908493",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 37,
      name: "Anissa Ruecker",
      tel: "(523) 588-6660 x610",
      address: "08367 Vilma Drives",
      opening_hours: "08:00",
      description: "delectus rerum fugit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=34.57634970706911",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 38,
      name: "Elnora Cremin",
      tel: "700.485.4910 x9939",
      address: "16949 Fritsch River",
      opening_hours: "08:00",
      description: "rerum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=40.11752338563803",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 39,
      name: "Sierra Zulauf",
      tel: "(667) 090-7483 x7888",
      address: "615 Evert Course",
      opening_hours: "08:00",
      description:
        "Laborum ut alias. Ut rerum sit error eius ullam beatae et accusamus omnis. Ut sit at dignissimos. Explicabo quia non officiis sunt totam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.255178049897534",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 40,
      name: "Esteban Hintz",
      tel: "(892) 256-2777 x9445",
      address: "56929 Toy Villages",
      opening_hours: "08:00",
      description: "Molestias ipsa aut deleniti optio inventore nostrum a.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.428325381949663",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 41,
      name: "Alford Zemlak I",
      tel: "495.258.7511",
      address: "13107 Pacocha Roads",
      opening_hours: "08:00",
      description: "modi tempore harum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.114932831713155",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 42,
      name: "Mr. Rico Skiles",
      tel: "(669) 688-7506 x62712",
      address: "8594 Roberts Mission",
      opening_hours: "08:00",
      description: "in",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.4119937255598",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 43,
      name: "Oren Jacobs",
      tel: "966.776.9775",
      address: "781 Kautzer Junctions",
      opening_hours: "08:00",
      description:
        "Eum ut assumenda id nihil tempore dolore. Necessitatibus voluptate sapiente. Et dolores fugit est voluptates.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.3329668432273",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 44,
      name: "Kim Williamson",
      tel: "160.908.2713 x88744",
      address: "473 Clemmie Square",
      opening_hours: "08:00",
      description: "aliquid consequatur non",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.398685598127157",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 45,
      name: "Derek Green",
      tel: "1-867-709-3735 x483",
      address: "9720 Talon Lakes",
      opening_hours: "08:00",
      description: "quia aliquid ducimus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.91910865210382",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 46,
      name: "Idell Bergnaum",
      tel: "596-301-6192 x5830",
      address: "9918 Noah Track",
      opening_hours: "08:00",
      description: "asperiores",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.41891329019436",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 47,
      name: "Eve Auer",
      tel: "059-023-4549 x0183",
      address: "420 Chet Harbor",
      opening_hours: "08:00",
      description:
        "Sequi est vitae sint qui dolores illo doloremque enim similique. Omnis quis ut explicabo et quasi est sed consectetur totam. Consequatur porro et ipsa dolores. Atque nam voluptatibus sunt nostrum optio molestiae odit beatae fugiat. Ipsam et nihil et commodi non sed. Veniam et quaerat exercitationem voluptatibus repellendus enim molestias.\n \rSoluta aliquid deserunt neque fuga sed. At id exercitationem hic reprehenderit molestias numquam et velit doloribus. Recusandae enim unde.\n \rUllam ea rerum nam veniam tenetur sapiente. Maiores saepe aspernatur est dolorem suscipit dolore rerum. Fugiat qui voluptatem quia nemo dicta illo dignissimos. Doloremque corrupti laboriosam natus sed ut minima sit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.77850731576547",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 48,
      name: "Maryjane Parisian II",
      tel: "411.758.6007 x3507",
      address: "911 Bessie Green",
      opening_hours: "08:00",
      description: "quas",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=29.283280221069184",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 49,
      name: "Madge Hammes",
      tel: "1-164-166-8518 x026",
      address: "206 Kerluke Station",
      opening_hours: "08:00",
      description: "culpa",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.54420154302466",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
    {
      id: 50,
      name: "Ned Spinka",
      tel: "(324) 673-3716 x69533",
      address: "42353 Marvin Mission",
      opening_hours: "08:00",
      description: "Officia sunt sit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=1.4517455871850604",
      viewCounts: 0,
      createdAt: "2022-02-04T07:34:41.000Z",
      updatedAt: "2022-02-04T07:34:41.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-02-04T07:34:41.000Z",
        updatedAt: "2022-02-04T07:34:41.000Z",
      },
    },
  ],
};
export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurants(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    },
  },
};
</script>