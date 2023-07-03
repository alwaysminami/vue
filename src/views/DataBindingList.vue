<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <!-- 
        리스트 랜더링(v-for)
        배열 데이터는 v-for 디렉티브를 이용하여 바인딩 가능
        반복적으로 랜더링 할 html 태그에 v-for 디렉티브를 사용하면 배열에 있는 데이터 수만큼 html 태그를 반복적으로 랜더링
        v-for="(item, index) in items" 형식으로 사용
      -->
      <tbody>
        <tr :key="i" v-for="(product, i) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productList: [
        {
          product_name: '기계식 키보드',
          price: 25000,
          category: '노트북/태블릿',
          delivery_price: 5000
        },
        {
          product_name: '무선마우스',
          price: 12000,
          category: '노트북/태블릿',
          delivery_price: 5000
        },
        {
          product_name: '아이패드',
          price: 725000,
          category: '노트북/태블릿',
          delivery_price: 5000
        },
        {
          product_name: '태블릿 거치대',
          price: 32000,
          category: '노트북/태블릿',
          delivery_price: 5000
        },
        {
          product_name: '무선충전기',
          price: 42000,
          category: '노트북/태블릿',
          delivery_price: 5000
        }
      ]
    }
  }
}
</script>

<style scoped>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
</style>
