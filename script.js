function calculateBMI() {
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value) / 100; // แปลง cm เป็น m
            
            if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                alert('กรุณาป้อนค่าที่ถูกต้อง');
                return;
            }
            
            const bmi = weight / (height * height);
            const category = getBMICategory(bmi);
            
            const resultElement = document.getElementById('result');
            resultElement.style.display = 'block';
            resultElement.className = 'result ' + category.class;
            resultElement.innerHTML = `
                <h2>ผลลัพธ์</h2>
                <p>ค่า BMI ของคุณ: <strong>${bmi.toFixed(2)}</strong></p>
                <p>อยู่ในเกณฑ์: <strong>${category.text}</strong></p>
            `;
        }
        
        function getBMICategory(bmi) {
            if (bmi < 18.5) {
                return { text: 'น้ำหนักน้อย / ผอม', class: 'underweight' };
            } else if (bmi < 23) {
                return { text: 'ปกติ (สุขภาพดี)', class: 'normal' };
            } else if (bmi < 25) {
                return { text: 'ท้วม / โรคอ้วนระดับ 1', class: 'overweight' };
            } else if (bmi < 30) {
                return { text: 'อ้วน / โรคอ้วนระดับ 2', class: 'obese1' };
            } else {
                return { text: 'อ้วนมาก / โรคอ้วนระดับ 3', class: 'obese2' };
            }
        }