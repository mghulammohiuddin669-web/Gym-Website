 const err = document.getElementById('error')
    const succ = document.getElementById('success')

    function showError(msg) {
      succ.classList.add('hidden')
      err.classList.remove('hidden')
      err.innerHTML = '⚠ ' + msg
    }

    function showSuccess(msg) {
      err.classList.add('hidden')
      succ.classList.remove('hidden')
      succ.innerHTML = '✓ ' + msg
    }

    function submitContact() {
      const name = document.getElementById('contactName').value
      const email = document.getElementById('contactEmail').value
      const phone = document.getElementById('contactPhone').value
      const branch = document.getElementById('contactBranch').value
      const message = document.getElementById('contactMessage').value

      const emailPattern = /^[^\s@]+@[^\s@]+\.(com|net|org|edu|pk)$/
      const phonePattern = /^[0-9+\s]{7,15}$/

      if (!name || !email || !phone || !branch || !message) {
        showError('All fields are required')
        return
      }
      if (!emailPattern.test(email)) {
        showError('Enter a valid email address')
        return
      }
      if (!phonePattern.test(phone)) {
        showError('Enter a valid phone number')
        return
      }
      showSuccess('Message sent! We will get back to you soon.')
    }