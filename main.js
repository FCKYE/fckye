const { createApp } = Vue

createApp({
    data() {
        return {
            isCopied: false
        }
    },
    mounted() {
        const copyButton = document.getElementById('copy-button');
        const contractAddress = document.getElementById('contract-address');

        copyButton.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(contractAddress.textContent);
                copyButton.textContent = 'Copied!';
                copyButton.classList.add('copied');
                
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                    copyButton.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    }
}).mount('#app')
