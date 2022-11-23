package com.queue.entity;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Table(name = "department")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    //private int departmentId;
    private String departmentName;
    private String departmentLetter;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

  /*  public int getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(int departmentId) {
        this.departmentId = departmentId;
    }*/

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    public String getDepartmentLetter() {
        return departmentLetter;
    }

    public void setDepartmentLetter(String departmentLetter) {
        this.departmentLetter = departmentLetter;
    }
}