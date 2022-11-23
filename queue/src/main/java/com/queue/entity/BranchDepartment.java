package com.queue.entity;

import javax.persistence.*;

@Entity
@Table(name = "branchDepartment")
public class BranchDepartment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String branchDepartmentId;
    private int branchId;
    private int departmentId;
    private String branchName;
    private String departmentName;
    private String departmentLetter;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBranchId() {
        return branchId;
    }

    public void setBranchId(int branchId) {
        this.branchId = branchId;
    }

    public int getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(int departmentId) {
        this.departmentId = departmentId;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
    }

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

    public String getBranchDepartmentId() {
        return branchDepartmentId;
    }

    public void setBranchDepartmentId(String branchDepartmentId) {
        this.branchDepartmentId = branchDepartmentId;
    }


}