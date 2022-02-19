// Bài 1: Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000
/*
- Mô hình 3 khối:
- Khối 1: người dùng click button "Kết quả"

- Khối 2: 
-   Bước 1: Nắm bắt sự kiện của nút để bắt đầu tính toán
- 	Bước 2: Tạo biến cho n, sum, numberr
-	Bước 3: Gán giá trị cho soNgay
-	Bước 4: n = 10000;
-	Bước 5: Dùng vòng lặp để thực hiện phép tính
-	Bước 6: in kết quả ra màn hình
- 
- Khối 3:
- In kết quả numberr
*/
const soTongEl = document.getElementById('soTong')

soTongEl.onclick = function(evt) {
    console.log(evt.target) // Tra ra doi tuong phat sinh ra event

    // const n = +document.getElementById('soN').value;
    function bt1(n) {
        let sum = 0;
        i = 1;
        while (true) {
         // Kiểm tra nếu sum + i lớn hơn 10000, thì ta se không cộng mà thoát khỏi vòng lặp while luôn
            if (sum + i > n) {
                break;
            }

            sum += i;
            i += 1;
            numberr = `${i}`;
        }
        return sum;    
    }    

    
    const wrapperEl = document.getElementById('soTongNV-wrapper');
    const soTongNVEl = document.getElementById('soTongNVEl');
    const minEl = document.getElementById('minEl');

    wrapperEl.style.display = "block";
    // bt1(n);
    soTongNVEl.innerHTML = bt1(10000).toLocaleString();    
    minEl.innerHTML = numberr.toLocaleString();

}

// Bài 2: Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000
/*
- Mô hình 3 khối:
- Khối 1: người dùng nhập vào số x, số n   

- Khối 2:
-   Bước 1: Nắm bắt sự kiện của nút để bắt đầu tính toán 
-   Bước 2: Tạo biến cho soX, soN, soMu
-   Bước 3: Gán giá trị cho soX, soN
-   Bước 4: Dùng hàm và vòng lặp để thực hiện phép tính
-   Bước 5: in kết quả soMu ra màn hình
-    
- Khối 3:
- In kết quả Giá trị trung bình
*/
// BT2: Tính tổng các số chẵn/lẻ từ 1 đến n
function setResultBT2(soMu) {
    const resultEl = document.getElementById("resultBT2");
    resultEl.style.display = "block";
    resultEl.innerHTML = `Kết quả: ${soMu}`;
}
document.getElementById("evenBT2").onclick = function () {
    const soX = +document.getElementById('inputVD').value;
    const soN = +document.getElementById('inputBT2').value;

    let soMu = 0;
    for(let i = 1; i <= soN; i++) {
        soMu += Math.pow(soX, i);        
    }
    setResultBT2(soMu);
};


// Bài 3: Nhập vào n. Tính giai thừa 1*2*...n
/*
- Mô hình 3 khối:
- Khối 1: người dùng nhập vào Số nguyên n   

- Khối 2:
-   Bước 1: Nắm bắt sự kiện của nút để bắt đầu tính toán 
- 	Bước 2: Tạo biến cho n, giaithua
-	Bước 3: Gán giá trị cho n
-	Bước 4: Tạo hàm cho biến giaiThua
-	Bước 5: in kết quả gttb ra màn hình
-	 
- Khối 3:
- In kết quả giai thừa
*/
// BT3: Tính tổng các số chẵn/lẻ từ 1 đến n
function setResultBT3(giaiThua) {
    const resultEl = document.getElementById("resultBT3");
    resultEl.style.display = "block";
    resultEl.innerHTML = `Kết quả: ${giaiThua}`;
}
document.getElementById("evenBT3").onclick = function () {
    const n = +document.getElementById('inputBT3').value;

    let giaiThua = 1;
    for(let i = 1; i <= n; i++) {
        giaiThua *= i;        
    }
    setResultBT3(giaiThua);
};

// Bài 4: viết chương trình khi click vào button sẽ in ra 10 thẻ div
/*
- Mô hình 3 khối:
- Khối 1: người dùng click button "creat"

- Khối 2: 
-   Bước 1: Nắm bắt sự kiện của nút để bắt đầu tính toán
- 	Bước 2: Tạo thẻ div có id = "parent" và display = "none" 
-	Bước 3: Dom tới thẻ div có id = "parent"
-	Bước 4: thay đổi giá trị display của thẻ div
-   Bước 5: in kết quả ra màn hình
-	 
- Khối 3:
- In kết quả 
*/

document.getElementById('create').onclick = function(evt) {
        
    
    const parentEl = document.getElementById("parent");
    
    parentEl.style.display = "block";

};

