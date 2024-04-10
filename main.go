package main

import (
	"fmt"
	"html/template"
	"net/http"
	"os"
)

func main() {
	temp, err := template.ParseGlob("./templates/*.html")
	if err != nil {
		fmt.Printf("ERREUR => %s", err.Error())
		return
	}

	http.HandleFunc("/main", func(w http.ResponseWriter, r *http.Request) {
		temp.ExecuteTemplate(w, "main", nil)
	})

	http.HandleFunc("/histoire", func(w http.ResponseWriter, r *http.Request) {
		temp.ExecuteTemplate(w, "histoire", nil)
	})

	rootDoc, _ := os.Getwd()
	fileserver := http.FileServer(http.Dir(rootDoc + "/assets"))
	http.Handle("/static/", http.StripPrefix("/static/", fileserver))
	http.ListenAndServe(":8080", nil)
}
