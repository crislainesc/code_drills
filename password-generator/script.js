(function (document) {
   const app = (function () {


      return {
         init: function () {
            this.initEvents();
         },

         initEvents: function () {
            this.getButtons();
            this.getPasswordSpan();
            this.setgeneratePassword();
            this.setCopyButton();
            this.setSaveButton();

         },

         getButtons: function () {
            this.generateButton = document.querySelector('[data-js="generate"]');
            this.copyButton = document.querySelector("[data-js='copy']");
            this.saveButton = document.querySelector("[data-js='save']");
         },

         setgeneratePassword: function () {
            app.generateButton.addEventListener('click', this.generatePassword);
         },

         setCopyButton: function () {
            app.copyButton.addEventListener('click', this.copyPassword);
         },

         setSaveButton: function () {
            app.saveButton.addEventListener('click', this.savePassword);
         },

         getPasswordSpan: function () {
            this.passwordText = document.querySelector('#password');
         },

         generatePassword: function () {

            app.passwordText.readonly = 'true'

            let password = '';

            const regex = new RegExp('[A-Z]|[\\d]', 'i')

            while (password.length < 10) {
               const charCode = Math.floor(Math.random() * 255);

               const charString = String.fromCharCode(charCode);

               if (charString.match(regex)) {
                  password += charString;
               }
            }

            app.passwordText.innerHTML = password
         },

         copyPassword: function () {

            app.passwordText.removeAttribute('disabled');

            app.passwordText.select();

            document.execCommand("copy");

            app.passwordText.setAttribute('disabled', 'disabled');

         },

         savePassword: function () {
            if (app.passwordText.textContent.length === 10)
               app.createPasswordElement();
            else
               alert('Por favor, gere uma senha antes de salvar!')
         },

         createPasswordElement: function () {
            const tbodyPassoword = document.querySelector('[data-js="passowrds"]');

            const tr = document.createElement('tr');
            const buttonDelete = document.createElement('button');

            tr.textContent = app.passwordText.value;
            buttonDelete.setAttribute('class', 'btn fa-solid fa-trash')

            buttonDelete.addEventListener('click', this.deletePassword)

            tr.appendChild(buttonDelete)

            tbodyPassoword.appendChild(tr)

         },

         deletePassword: function () {
            const tbodyPassoword = document.querySelector('[data-js="passowrds"]');

            const element = this.parentNode;

            tbodyPassoword.removeChild(element);
         }
      }

   })();

   app.init()
})(document);