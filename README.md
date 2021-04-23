##### Notes
###### A few rules that might be useful for collabs (and pretty too, tho)
* Semua perubahan untuk keperluan pengembangan, gunakan branch develop atau **switch** ke branch **develop** jika anda berada di branch main/master. Ini menjadi base source code pekerjaan seluruh developer terkait. `git branch develop && git switch develop`/ `git switch develop`
* Untuk pengerjaan pengembangan khusus atau individu (misal fitur baru), buat **branch dari branch develop**. `git switch sembarang`( apabila menggunakan git flow: `git flow feature start MYFEATURE` )
* Jika fitur sudah selesai dikerjakan, **switch ke branch develop** dan lakukan **merge** branch fitur baru tersebut. `git switch develop && git merge sembarang`
* Pastikan lakukan **git pull** terlebih dahulu sebelum melakukan **merge branch fitur** untuk mendapatkan update terbaru. (apabila menggunakan git flow: `git flow feature finish MYFEATURE` ).
